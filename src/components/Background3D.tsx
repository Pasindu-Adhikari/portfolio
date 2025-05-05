import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const particles = useRef<THREE.Points>();
  const mousePosition = useRef({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (!containerRef.current) return;
    // Initialize scene
    scene.current = new THREE.Scene();
    // Initialize camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.current.position.z = 20;
    // Initialize renderer
    renderer.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.current.domElement);
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      color: '#4fd1c5',
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    particles.current = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.current.add(particles.current);
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX / window.innerWidth * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    // Handle window resize
    const handleResize = () => {
      if (!camera.current || !renderer.current) return;
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    // Animation loop
    const animate = () => {
      if (!scene.current || !camera.current || !renderer.current || !particles.current) return;
      particles.current.rotation.x += 0.0001;
      particles.current.rotation.y += 0.0001;
      // Subtle movement based on mouse position
      particles.current.rotation.x += mousePosition.current.y * 0.0003;
      particles.current.rotation.y += mousePosition.current.x * 0.0003;
      renderer.current.render(scene.current, camera.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();
    // Cleanup
    return () => {
      if (containerRef.current && renderer.current) {
        containerRef.current.removeChild(renderer.current.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      // Dispose resources
      particles.current?.geometry.dispose();
      (particles.current?.material as THREE.Material)?.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 -z-10" style={{
    background: 'linear-gradient(to bottom, #111827, #1f2937)'
  }} />;
};
export default Background3D;
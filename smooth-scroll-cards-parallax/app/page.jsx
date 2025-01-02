"use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import { projects } from "@/constants/data";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	// to see the scrollYProgress value
	// useEffect(() => {
	// 	scrollYProgress.on("change", (e) =>
	// 		console.log(scrollYProgress.current)
	// 	);
	// }, []);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main ref={container} className={styles.main}>
			{projects.map((project, i) => {
				// scale the cards based on their index (0th have highest scale down)
				const targetScale = 1 - (projects.length - i) * 0.05;

				return (
					<Card
						key={i}
						i={i}
						{...project}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
						progress={scrollYProgress}
					/>
				);
			})}
		</main>
	);
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./style.module.scss";
import { motion, progress, useScroll, useTransform } from "framer-motion";

export default function Card({
	i,
	title,
	description,
	src,
	link,
	color,
	progress,
	range,
	targetScale,
}) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});
	// when the scrollYProgress is 0, the scale will be 2 and when it is 1, the scale will be 1
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]); // card scale down

	return (
		<div ref={container} className={styles.cardContainer}>
			<motion.div
				className={styles.card}
				style={{
					backgroundColor: color,
					top: `calc(-10% + ${i * 25}px)`,
					scale,
				}}
			>
				<h2>{title}</h2>
				<div className={styles.body}>
					<div className={styles.description}>
						<p>{description}</p>
						<span>
							<a href={link} target="_blank">
								See More &rarr;
							</a>
						</span>
					</div>

					<div className={styles.imageContainer}>
						<motion.div
							className={styles.inner}
							style={{ scale: imageScale }}
						>
							<Image fill src={`/images/${src}`} alt="image" />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

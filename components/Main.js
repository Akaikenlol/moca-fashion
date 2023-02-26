import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

const banner = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const letterAni = {
	initial: { y: 150 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

const hoverRotate = {
	initial: {
		rotate: -45,
	},
	hover: {
		rotate: 0,
		transition: {
			duration: 0.4,
		},
	},
};

export default function Main({ layoutId }) {
	const [playMarquee, setPlayMarquee] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPlayMarquee(true);
		}, 2000);
	}, []);

	return (
		<Layout>
			<motion.div id="banner" variants={banner}>
				<div className="banner__content">
					<AnimatedLetters title=".brand" />
					<p className="banner__message">
						We are specialised in making things up the foundation of our brand
						and setting our product up for success.
					</p>
				</div>
				<BannerRowCenter title={"fashion"} playMarquee={playMarquee} />
				<BannerRowBottom title={"studio"} />
				<motion.div
					className="banner-img"
					layoutId={layoutId}
					transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
				>
					<div className="img-container">
						<motion.div className="scroll-ani">
							<Image
								src="/image/main.jpg"
								alt="Banner"
								fill
								sizes="(max-width: 768px) 600px,(max-width: 1200px) 1000px,2000px"
							/>
						</motion.div>
					</div>
				</motion.div>

				<div className="section-1">
					<div className="corners">
						<Icon icon="vaadin:corner-upper-left" />
						<Icon icon="vaadin:corner-upper-right" />
					</div>
					<div className="section-1__info">
						<div className="section-1__info__index">
							<p>00</p>
						</div>
						<div className="section-1__info__content">
							<p className="section-1__info__eng">
								WE SOLVE ISSUES IN FASHION BUSINESSES WITH AI TECHNOLOGY AND
								CREATIVE TO CREATE NEW WORTH WITH GLOBAL APPAREL COMPANIES.
							</p>
							<p className="section-1__info__jp">
								ファッションビジネスの課題をAIテクノロジーとクリエイティブで解決し、
								世界中のアパレル企業と共に新たな価値を創造します。
							</p>
						</div>
					</div>

					<div className="corners">
						<Icon icon="vaadin:corner-lower-left" />

						<p>AI FASHION</p>
						<p>01</p>

						<Icon icon="vaadin:corner-lower-right" />
					</div>
				</div>

				<div className="divider"></div>

				<div className="model-container">
					<div className="model">
						<div className="model-text">
							<p>
								THE <span>MODELS</span>
							</p>
						</div>
						<div className="model-content">
							<p>01</p>
							<p>
								BY GENERATING MODELS WITH OUR UNIQUE AI TECHNOLOGY, WE OFFER
								FASHION MODELS THAT ARE PERFECTLY OPTIMISED FOR THE IDENTITY OF
								APPAREL BRANDS.
							</p>
							<motion.div
								className="underline-left"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1, transition: { duration: 0.7 } }}
							></motion.div>
							<p>
								アパレルブランドに最適化したファッションモデルを提供します。
							</p>
							<motion.a initial="initial" whileHover="hover" href="">
								Learn More{" "}
								<motion.span variants={hoverRotate}>
									<Icon icon="material-symbols:arrow-right-alt-rounded" />
								</motion.span>
							</motion.a>
						</div>
					</div>
					<div className="corners">
						<Icon icon="vaadin:corner-lower-left" />

						<p>AI FASHION</p>
						<p>01</p>

						<Icon icon="vaadin:corner-lower-right" />
					</div>
				</div>

				<div className="marquee animate">
					<motion.div className="marquee__inner">
						<p className="bigger-row-title">features .</p>
						<p className="bigger-row-title">features .</p>
						<p className="bigger-row-title">features .</p>
						<p className="bigger-row-title">features .</p>
					</motion.div>
				</div>

				<div className="section-2">
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1, transition: { duration: 0.7 } }}
						className="divider"
					></motion.div>
					<div className="section-2__content">
						<p className="section-2__info__index">00</p>

						<p className="section-2__info__eng">
							WE SOLVE ISSUES IN FASHION BUSINESSES WITH AI TECHNOLOGY AND
							CREATIVE TO CREATE NEW WORTH WITH GLOBAL APPAREL COMPANIES.
						</p>
						<p className="section-2__info__jp">
							ファッションビジネスの課題をAIテクノロジーとクリエイティブで解決し、
							世界中のアパレル企業と共に新たな価値を創造します。
						</p>
					</div>
					<div className="img-container">
						<Image
							src="/image/main.jpg"
							alt="Section Image"
							fill
							sizes="(max-width: 768px) 600px,(max-width: 1200px) 1000px,2000px"
						/>
						<div className="img-overlay">
							<p>Supreme</p>
						</div>
					</div>
				</div>
			</motion.div>
		</Layout>
	);
}

const BannerRowCenter = ({ title, playMarquee }) => {
	return (
		<div className={`banner-row marquee  ${playMarquee && "animate"}`}>
			<motion.div
				initial={{ y: 310 }}
				animate={{ y: 0 }}
				transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
				className="marquee__inner"
			>
				<AnimatedLetters title={title} disabled />
				<AnimatedLetters title={title} />
				<AnimatedLetters title={title} disabled />
				<AnimatedLetters title={title} disabled />
			</motion.div>
		</div>
	);
};

const BannerRowBottom = ({ title }) => {
	return (
		<div className={"banner-row center"}>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
				className="scroll"
			>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 1.8,
					}}
				>
					scroll
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 1.8,
					}}
				>
					down
				</motion.span>
			</motion.div>
			<AnimatedLetters title={title} />
		</div>
	);
};

const AnimatedLetters = ({ title, disabled }) => (
	<motion.span
		className="row-title"
		variants={disabled ? null : banner}
		initial="initial"
		animate="animate"
	>
		{[...title].map((letter) => (
			<motion.span
				className="row-letter"
				variants={disabled ? null : letterAni}
			>
				{letter}
			</motion.span>
		))}
	</motion.span>
);

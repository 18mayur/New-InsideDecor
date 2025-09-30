const testimonialList = [
	{
		title: "Very Good Services",
		author: {
			fullName: "Akshay Kumar",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		title: "High Quality Service",
		author: {
			fullName: "Raima Sen",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			designation: "Founder / CEO",
		},
		rating: 4,
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
	{
		title: "Impressive Skills",
		author: {
			fullName: "Arjun Kapur",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<div className="mt-6">
		<div>
			<h4 className="text-2xl font-medium mb-1">{testimonial.title}</h4>
			<p className="opacity-50 mb-6">{testimonial.description}</p>
			<h4 className="mb-1 text-xl font-medium">
				{testimonial.author.fullName}
			</h4>
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="mb-6">
				<span className="fas fa-star text-yellow-500"></span>
				<span className="fas fa-star text-yellow-500"></span>
				<span className="fas fa-star text-yellow-500"></span>
				<span className="fas fa-star-half-alt text-yellow-500"></span>
				<span className="fas fa-star text-yellow-200 dark:text-opacity-20"></span>
			</p>
		</div>
		<img
			src={testimonial.author.picture}
			alt={testimonial.author.fullName}
			className="max-w-full h-auto rounded-full mx-auto"
			width="110"
		/>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial6 = () => {
	const [index, setIndex] = useState(0);
	const [active, setActive] = useState(0);
	const { title, description, author, rating } = testimonialList[index];

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
		setActive(selectedIndex);
	};

	return (
		<section className="ezy__testimonial6 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center md:mb-6">
					<div className="sm:max-w-lg text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
							Community Reviews
						</h2>
						<p>
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</div>
				</div>

				<div className="flex justify-center text-center">
					<div className="md:max-w-xl">
						<div className="mt-6">
							<div>
								<h4 className="text-2xl font-medium mb-1">{title}</h4>
								<p className="opacity-50 mb-6">{description}</p>
								<h4 className="mb-1 text-xl font-medium">{author.fullName}</h4>
								<Rating rating={rating} showLabel={false} />
							</div>
							<img
								src={author.picture}
								alt={author.fullName}
								className="max-w-full h-auto rounded-full mx-auto"
								width="110"
							/>
						</div>

						<div className="flex justify-center mt-6">
							<span
								className={`${
									active === 0
										? "bg-gray-700 scale-125"
										: "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
								} w-3 h-3 cursor-pointer mx-2 rounded-full`}
								onClick={() => handleSelect(0)}
							/>
							<span
								className={`${
									active === 1
										? "bg-gray-700 scale-125"
										: "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
								} w-3 h-3 cursor-pointer mx-2 rounded-full`}
								onClick={() => handleSelect(1)}
							></span>
							<span
								className={`${
									active === 2
										? "bg-gray-700 scale-125"
										: "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
								} w-3 h-3 cursor-pointer mx-2 rounded-full`}
								onClick={() => handleSelect(2)}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
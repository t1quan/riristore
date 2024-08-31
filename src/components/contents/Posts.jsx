import PostItem from "../common/PostItem";

function Posts() {
	return (
		<section className="my-5">
			<div className="mb-5 flex flex-col justify-between items-center gap-4">
				<div className="text-center max-w-lg">
					<h2 className="relative text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
						Our <span className="text-primary">Blogs</span>
					</h2>
					<p className="text-gray-400">Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula.</p>
				</div>
			</div>
			<div className="">
				<PostItem />
			</div>
		</section>
	);
}

export default Posts;

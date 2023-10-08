
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 space-y-3">
            <h2 className="text-4xl font-semibold text-[#3d3d3d]">{subHeading}</h2>
            <p className="text-[#3ec5c7] text-2xl">{heading}</p>
        </div>
    );
};

export default SectionTitle;
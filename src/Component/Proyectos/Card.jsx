
// eslint-disable-next-line react/prop-types
const Card = ({ titles, subtitles, images, alt, git, url }) => {
  return (
    <div className="flex flex-col w-92 h-80  items-center justify-center border rounded-xl border-orange-100">
      <div className="h-full w-full group relative items-center justify-center overflow-hidden cursor-pointer ">
        <img
          className=" rounded-xl h-full  w-full object-cover  transition-transform duration-500 group-hover:opacity-5"
          src={images}
          alt={alt}
        />
        <div className="absolute flex flex-col inset-0 text-orange-100  items-center justify-center gap-3 px-6  translate-y-[100%] group-hover:translate-y-0 transition-all duration-500  ">
          <div className="flex gap-5">

            <a target="_blank" href={git} rel="noreferrer" >
              <i className=" bi bi-github text-2xl "></i>
            </a>
            <a target="_blank" href={url} rel="noreferrer">
              <i className="bi bi-link-45deg text-2xl "></i>
            </a>
          </div>
          <h5 className="font-oswald font-bold text-3xl lg:text-5xl uppercase tracking-tighter">{titles}</h5>
          <p className="text-sm tracking-tighter ">{subtitles}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
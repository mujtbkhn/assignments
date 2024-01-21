import BACKGROUND from "../assets/imgs/background.jpg";

export const ProfileCard = (props) => {
  return (
    <div>
      <div className="border-black border-2 w-96 mx-auto p-1.5 flex flex-col mt-12">
        <img className="absolute h-60 right-0 -mt-10 w-full mx-auto object-contain" src={BACKGROUND} />
        <img
          className="relative top-16 w-44 mx-auto rounded-full"
          src={props.img}
          alt={props.name}
        />
        <div className="flex mx-auto gap-5 pt-16">
          <h1 className="font-bold text-2xl">{props.name}</h1>
          <h4 className="text-2xl">{props.age}</h4>
        </div>
        <h4 className="mx-auto mt-2 mb-4">{props.city}</h4>

        <div className="flex justify-between">
          <div>
            <h1 className="mx-auto text-center font-bold text-xl">
              {props.followersCount}
            </h1>
            <h5>Followers</h5>
          </div>
          <div>
            <h1 className="mx-auto text-center font-bold text-xl">
              {props.likesCount}
            </h1>
            <h5>Likes</h5>
          </div>
          <div>
            <h1 className="mx-auto text-center font-bold text-xl">
              {props.photosCount}
            </h1>
            <h5>Photos</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

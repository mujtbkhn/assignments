import { useEffect, useRef, useState } from "react";

export const Para = () => {
  const [para, setPara] = useState([]);

  const search = useRef(null);

  const paraGenerate = async () => {
    const data = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${search.current.value}&start-with-lorem=1&format=html`
    );
    const htmlContent = await data.text();
    setPara(
      htmlContent
        .split("<p>")
        .map((paragraph, index) => paragraph.replace(("<p>","</p>") , " "))
        .filter(Boolean)
    );
  };

  useEffect(() => {
    paraGenerate;
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center p-12">
        <input
          className="px-5 py-2 m-5 border-2 border-black rounded-sm w-96"
          type="text"
          placeholder="enter the number of paragraphs you want!"
          ref={search}
        />
        <button
          className="px-5 m-5 text-white bg-black rounded-xl"
          onClick={paraGenerate}
        >
          generate
        </button>
      </div>

      <div className="px-12">
        {para.length > 0 && (
          <div>
            {para.map((paragraph, index) => (
              <p className="m-4" key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

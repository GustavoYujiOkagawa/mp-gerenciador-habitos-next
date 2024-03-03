import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {

    let image: [string, string, number? ] = [
        "/public/gray_mark.svg", 
        "gray mark", 12];

    if(day === true) image = ["/check.svg" , "green_mark", 24];
    if(day === false) image = ["/x.svg" , "trash red", 24];

    const [src, alt, size] = image;
  return (
    <div className="flex justify-center items-center h-9">
      <Image 
      src={src} 
      width={size} 
      height={size} 
      alt={alt} />
    </div>
  );
}

export default DayState;

import Image from 'next/image';
import Link from 'next/link';

const Social=()=>{
    return (
      <>
        <main className="social flex flex-col space-y-6">
          <div>
            <Link href={"https://twitter.com/crypt0criminals"} target="_blank">
              <Image
                className="cursor-pointer"
                src={"/icons/twitter.svg"}
                width={28}
                height={28}
                objectFit="contain"
                layout="intrinsic"
                alt=""
              />
             
            </Link>
          </div>
          <div>
            <Link
              href={"https://www.instagram.com/crypt0criminals/"}
              target="_blank"
            >
              <Image
                src={"/icons/instagram.svg"}
                width={28}
                height={28}
                objectFit="contain"
                layout="intrinsic"
                alt=""
              />
            </Link>
          </div>{" "}
          <div>
            <Image
              src={"/icons/tiktok.svg"}
              width={28}
              height={28}
              objectFit="contain"
              layout="intrinsic"
              alt=""
            />
          </div>{" "}
          <div>
            <Image
              src={"/icons/opensea.svg"}
              width={28}
              height={28}
              objectFit="contain"
              layout="intrinsic"
              alt=""
            />
          </div>{" "}
          <div>
            <Image
              src={"/icons/discord.svg"}
              width={28}
              height={28}
              objectFit="contain"
              layout="intrinsic"
              alt=""
            />
          </div>{" "}
        </main>
      </>
    );
}

export default Social;
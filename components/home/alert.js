import Container from "../structure/container";
import cn from "classnames";
import { AiOutlineBell } from "react-icons/ai";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-[#fac928] border-accent-2": !preview,
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          {preview ? (
            <>
              This is page is a preview.{" "}
              <a
                href='/api/exit-preview'
                className='underline hover:text-cyan duration-200 transition-colors'
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              <div className='flex justify-center items-center max-sm:items-start'>
                <AiOutlineBell className='mr-1 max-sm:mt-[2px]' />{" "}
                <span>
                  Watch ZOE's Tim Spector on Diary of a CEO{" "}
                  <a
                    href={`https://www.youtube.com/watch?v=66hWntvp0_4`}
                    className='underline hover:text-success duration-200 transition-colors'
                  >
                    available now on Youtube
                  </a>
                  .
                </span>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

"use client";
import clsx from "clsx";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function FaqQuestion({
  question,
  setFaq,
  activeFaq,
}: {
  question: { title: string; description: string; id: number };
  setFaq: any;
  activeFaq: number;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-3xl border border-black p-4 transition-all duration-300",
        activeFaq === question.id
          ? "gap-2 rounded-xl bg-[#FFC4A3]"
          : "bg-transparent",
      )}
      onClick={() =>
        activeFaq === question.id ? setFaq(0) : setFaq(question.id)
      }
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl">{question.title}</h3>

        {activeFaq === question.id ? (
          <FaCircleMinus className="h-6 w-6" />
        ) : (
          <FaCirclePlus className="h-6 w-6" />
        )}
      </div>

      {activeFaq === question.id && (
        <div className="h-[2px] w-full rounded-full bg-black"></div>
      )}

      <div
        className={clsx(
          "grid overflow-hidden transition-grid",
          question.id === activeFaq ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <p className="overflow-hidden">{question.description}</p>
      </div>
    </div>
  );
}

export default FaqQuestion;

import React, { useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion"; // optional

const events = [
  {
    title: "Guru Purnima Celebration",
    date: "2025-06-25",
    img: "/assets/img2.png",
    desc: "Lorem ispum dolor sit amet, lorem ispum dolor sit amet.",
  },
  {
    title: "Annual Day Celebration",
    date: "2025-07-25",
    img: "/assets/img2.png",
    desc: "Lorem ispum dolor sit amet, lorem ispum dolor sit amet.",
  },
  {
    title: "Friendship Day Celebration",
    date: "2025-08-25",
    img: "/assets/img2.png",
    desc: "Lorem ispum dolor sit amet, lorem ispum dolor sit amet.",
  },
];

const toKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

const parseISO = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const getMonthDiff = (fromY, fromM, toY, toM) =>
  (toY - fromY) * 12 + (toM - fromM);

const Calendar = () => {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() }); // m: 0-11
  const [selected, setSelected] = useState(null); // Date object
  const [dir, setDir] = useState(0); // -1 left, +1 right (for slide)

  const monthStart = new Date(view.y, view.m, 1);
  const monthName = monthStart.toLocaleString("en-US", { month: "long" });
  const yearNum = view.y;

  // Build a set of all event date keys for quick lookup
  const eventKeySet = useMemo(() => {
    const set = new Set();
    events.forEach((e) => set.add(e.date));
    return set;
  }, []);

  // Monday-first month matrix (6 rows x 7 cols)
  const matrix = useMemo(() => {
    const startDow = (monthStart.getDay() + 6) % 7; // Mon=0..Sun=6
    const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
    const cells = [];
    const prevMonthDays = startDow;
    const totalCells = 42;
    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - prevMonthDays + 1;
      const date = new Date(view.y, view.m, dayNum);
      cells.push({
        date,
        inMonth: dayNum >= 1 && dayNum <= daysInMonth,
      });
    }
    return cells;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.y, view.m]);

  const isSameDay = (a, b) =>
    a && b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const goMonth = (delta) => {
    setDir(delta > 0 ? 1 : -1);
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const gotoEvent = (iso) => {
    const d = parseISO(iso);
    // set slide direction based on target vs current view
    const diff = getMonthDiff(view.y, view.m, d.getFullYear(), d.getMonth());
    setDir(diff > 0 ? 1 : diff < 0 ? -1 : 0);
    setView({ y: d.getFullYear(), m: d.getMonth() });
    setSelected(d);
  };

  return (
    <div className="w-full font-poppins xl:px-16 md:px-10 px-5">
        <div className='flex gap-x-10 items-center'>

          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
    </div>

            <p className='font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap '>Academic Calendar</p>

  <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
    </div>
        </div>
      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        This calendar highlights major academic activities, hospital postings, celebrations and events scheduled for the month.
      </p>

      <div className="w-full lg:h-[500px] h-fit flex lg:flex-row flex-col gap-y-10 gap-x-16 md:rounded-[50px] rounded-[30px] bg-[#005478] mt-14 md:p-5 p-4">
        {/* CALENDAR */}
        <div className="lg:w-[50%] w-full h-full p-6 bg-white md:rounded-[25px] rounded-[15px]">
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-[25px] text-[#222222]">Calendar</p>
            <img src="/assets/calendar.svg" className="w-[35px] h-[35px]" />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="text-[#333333] font-normal text-[18px]">
              {monthName} {yearNum}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button type="button" onClick={() => goMonth(-1)} aria-label="Previous month">
                <ChevronLeft color="#005478" />
              </button>
              <button type="button" onClick={() => goMonth(1)} aria-label="Next month">
                <ChevronRight color="#005478" />
              </button>
            </div>
          </div>

          {/* HEADER */}
          <div className="mt-4 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-7 text-center text-[14px] font-normal uppercase tracking-wide text-[#333333]">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div key={d} className="p-2">
                  {d}
                </div>
              ))}
            </div>

            {/* MONTH GRID with slide animation */}
            <div className="relative h-[336px]  overflow-hidden">
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={`${view.y}-${view.m}`}
                  custom={dir}
                  initial={{ x: dir === 0 ? 0 : dir > 0 ? 40 : -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: dir > 0 ? -40 : 40, opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="grid grid-cols-7"
                >
                  {matrix.map((cell, i) => {
                    const inMonth = cell.inMonth;
                    const isToday = isSameDay(cell.date, today);
                    const isSelected = isSameDay(cell.date, selected);
                    const key = toKey(cell.date);
                    const isEventDay = inMonth && eventKeySet.has(key);

                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => inMonth && setSelected(cell.date)}
                        className={[
                          "relative h-12 bg-white p-0 text-sm outline-none transition",
                          inMonth ? "text-slate-900" : "text-slate-300",
                          "hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-400",
                        ].join(" ")}
                        disabled={!inMonth}
                        aria-pressed={isSelected}
                        aria-current={isToday ? "date" : undefined}
                        aria-label={`${cell.date.toDateString()}${
                          isEventDay ? " (has event)" : ""
                        }`}
                      >
                        <span
                          className={[
                            "inline-flex h-8 w-8 items-center justify-center rounded-full",
                            isSelected
                              ? "bg-[#F8A813] text-white"
                              : isToday
                              ? "ring-1 ring-[#F8A813]"
                              : isEventDay
                              ? "bg-[#F8A813]/20 text-[#2A4767] font-medium"
                              : "",
                          ].join(" ")}
                        >
                          {cell.date.getDate()}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* EVENTS LIST */}
        <div className="events lg:w-[50%] w-full h-full flex flex-col gap-y-7">
          {events.map((e, idx) => (
            <button
              key={e.date}
              type="button"
              onClick={() => gotoEvent(e.date)}
              className="text-left w-full relative flex gap-x-5 rounded-[10px] md:h-[130px] h-fit bg-white border-[3.5px] border-[#F8A813] p-2 hover:shadow-md transition"
            >
              <div className="w-[120px] h-full shrink-0">
                <img src={e.img} loading='lazy' className="rounded-[5px] w-full h-full object-cover" />
              </div>

              <div>
                <p className="font-semibold text-[20px] text-[#282828]">{e.title}</p>
                <p className="font-medium text-[16px] text-[#8D8D8D] line-clamp-2">
                  {e.desc}
                </p>
                <p className="font-normal text-[14px] text-[#8D8D8D] mt-5">
                  {new Date(e.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* left tab notch */}
              <div className="w-[35px] h-[35px] absolute top-11 -left-4.5 rounded-full bg-white border-[1.2px] border-[#F8A813] flex justify-center items-center">
                <ChevronLeft color="#F8A813" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <button className="w-fit md:h-[50px] h-[45px] bg-[#F8A813] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto mt-12 px-8">
        Download 
      </button>
    </div>
  );
};

export default Calendar;

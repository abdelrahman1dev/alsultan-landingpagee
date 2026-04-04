import YearBox from "../components/YearBox"

function YearSec() {
    return (
        <section className="flex flex-col gap-5 py-20">
            <h1 className="text-6xl font-bold text-center mt-10 mb-5 text-[#E5E5E5]">
                السنوات الدراسية
            </h1>

            <div className="flex gap-10 overflow-x-auto lg:overflow-x-hidden max-w-full mx-auto p-5">

                <div className="shrink-0 w-80">
                    <YearBox year="اولى ثانوي" />
                </div>

                <div className="shrink-0 w-80">
                    <YearBox year="تانية ثانوي" />
                </div>

                <div className="shrink-0 w-80">
                    <YearBox year="ثالثة ثانوي" />
                </div>

            </div>
        </section>
    )
}


export default YearSec

import Accordion from "./Accordion";

const StandOut = () => {
    return (
        <section className="animate-fad p-4">
            <div className="mb-8 text-center">
                <h2 className="text-xl font-bold">What makes our bank stand out <br /> from the rest?</h2>
            </div>
            <Accordion />
        </section>
    );
}

export default StandOut;
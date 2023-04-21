import Button from '@/components/ui/button';

const Numbers = () => {
    /*const [countOffices, setCountOffices] = useState('0');
    const [countCountries, setCountCountries] = useState('0');
    const [countEmployees, setCountEmployees] = useState('0');

    const counter = (start, end, duration, callback) => {
        let current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                callback(current.toString());
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    };

    useEffect(() => {
        counter(200, 160, 4000, setCountOffices);
        counter(0, 160, 4000, setCountCountries);
        counter(200, 1600, 4000, setCountEmployees);
    }, []);*/

    return (
        <section className="pb-16 mt-16 bg-numbers-bg bg-no-repeat bg-center">
            <h5 className="font-bold text-[42px] leading-[130%] text-black-dark text-center">DSV in numbers</h5>
            <div className="container max-w-mid grid grid-cols-3 gap-7 my-[140px]">
                <div className="flex flex-col items-center">
                    <h6 className="font-bold text-[72px] leading-none text-blue">1,600</h6>
                    <p className="font-bold text-base text-black-dark mt-8">Offices and logistic facilities</p>
                </div>
                <div className="flex flex-col items-center">
                    <h6 className="font-bold text-[72px] leading-none text-blue">80+</h6>
                    <p className="font-bold text-base text-black-dark mt-8">Countries worldwide</p>
                </div>
                <div className="flex flex-col items-center">
                    <h6 className="font-bold text-[72px] leading-none text-blue">75,000+</h6>
                    <p className="font-bold text-base text-black-dark mt-8">Employees</p>
                </div>
            </div>
            <Button additionalClasses="mx-auto mb-[140px]">Find your DSV office</Button>
        </section>
    );
};

export default Numbers;

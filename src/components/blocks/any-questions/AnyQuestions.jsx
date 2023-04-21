import PropTypes from 'prop-types';
import Button from '@/components/ui/button';

const AnyQuestions = ({ question, description, buttonName, imgSrc }) => {
    return (
        <section>
            <div className="container max-w-mid grid grid-cols-2 gap-7">
                <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-[42px] leading-[130%] text-black-dark">{question}</h5>
                    <p className="font-regular text-lg text-black-dark my-8">{description}</p>
                    <div>
                        <Button>{buttonName}</Button>
                    </div>
                </div>
                <div className="relative h-[427px]">
                    <img
                        width={570}
                        height={427}
                        className="absolute w-full h-full object-cover"
                        src={imgSrc}
                        alt="assistant photo"
                    />
                </div>
            </div>
        </section>
    );
};

AnyQuestions.propTypes = {
    question: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    buttonName: PropTypes.string,
    imgSrc: PropTypes.string,
};

export default AnyQuestions;

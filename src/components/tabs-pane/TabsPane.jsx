import { memo, useState } from 'react';
import TabButton from '@/components/ui/tab/TabButton';
import { useForm, Controller } from 'react-hook-form';
import Input from '@/components/ui/form/input';
import CustomSelect from '@/components/ui/form/select';
import Button from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const optionsList = [
    { value: 'industry-solutions', label: 'Industry solutions' },
    { value: 'air-freight', label: 'Air Freight' },
    { value: 'road-freight', label: 'Road Freight' },
    { value: 'project-transport', label: 'Project transport' },
    { value: 'logistic-solutions', label: 'Logistic Solutions' },
];

const TabsPane = () => {
    const [tab, setTab] = useState('quote');
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // eslint-disable-next-line no-console
    const onNeedSubmit = data => console.log(data);

    // eslint-disable-next-line no-console
    const onTrackSubmit = data => console.log(data);

    return (
        <section>
            <div className="bg-black-dark">
                <div className="container max-w-mid h-16 grid grid-cols-4 gap-[1px]">
                    <TabButton isActive={tab === 'quote'} onClick={() => setTab('quote')}>
                        Get a quote
                    </TabButton>
                    <TabButton isActive={tab === 'logistics'} onClick={() => setTab('logistics')}>
                        Logistics Solutions
                    </TabButton>
                    <TabButton isActive={tab === 'book'} onClick={() => setTab('book')}>
                        Book
                    </TabButton>
                    <TabButton isActive={tab === 'tracking'} onClick={() => setTab('tracking')}>
                        Track & Trace
                    </TabButton>
                </div>
            </div>
            <div className="bg-white">
                <div className="container max-w-mid h-[240px] py-12">
                    <AnimatePresence mode="wait">
                        {tab === 'quote' && (
                            <motion.div
                                key="quote"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                            >
                                <h6 className="font-bold text-2xl text-black-dark text-center mb-6">
                                    Tell us what you need
                                </h6>
                                <form onSubmit={handleSubmit(onNeedSubmit)} className="w-full" noValidate>
                                    <div className="flex gap-7 max-w-[770px] mx-auto">
                                        <Controller
                                            control={control}
                                            rules={{ required: true }}
                                            name="select"
                                            defaultValue=""
                                            render={({ field: { ref, value, ...rest } }) => {
                                                return (
                                                    <CustomSelect
                                                        inputRef={ref}
                                                        value={value}
                                                        placeholder="Choose"
                                                        id="select"
                                                        instanceId="select"
                                                        error={errors.select ? true : false}
                                                        helperText={errors.select && 'Field is required!'}
                                                        options={optionsList}
                                                        {...rest}
                                                    />
                                                );
                                            }}
                                        />
                                        <Button type="submit">Request</Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                        {tab === 'logistics' && (
                            <motion.div
                                key="logistics"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                            >
                                <h6 className="font-bold text-2xl text-black-dark text-center mb-6">
                                    Would you like to know more about our logistics solutions?
                                </h6>
                                <div className="flex justify-center gap-7">
                                    <Button>Logistics Solutions offer</Button>
                                    <Button>Learn more about our Logistics Solutions</Button>
                                </div>
                            </motion.div>
                        )}
                        {tab === 'book' && (
                            <motion.div
                                key="book"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                            >
                                <h6 className="font-bold text-2xl text-black-dark text-center mb-6">
                                    Book your next shipment directly
                                </h6>
                                <div className="flex justify-center gap-7">
                                    <Button>New to DSV</Button>
                                    <Button>Alredy a customer</Button>
                                </div>
                            </motion.div>
                        )}
                        {tab === 'tracking' && (
                            <motion.div
                                key="tracking"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { type: 'linear', duration: 0.15 },
                                }}
                            >
                                <h6 className="font-bold text-2xl text-black-dark text-center mb-6">Track & Trace</h6>
                                <form onSubmit={handleSubmit(onTrackSubmit)} className="w-full" noValidate>
                                    <div className="flex gap-7 max-w-[770px] mx-auto">
                                        <Input
                                            id="trackId"
                                            placeholder="Enter Track & Trace ID"
                                            error={errors.trackId ? true : false}
                                            helperText={errors.trackId && 'Field is required!'}
                                            {...register('trackId', { required: true })}
                                        />
                                        <Button type="submit">Track</Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default memo(TabsPane);

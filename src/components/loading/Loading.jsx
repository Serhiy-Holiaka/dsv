import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.holder}>
            <div className={classes.roller}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default Loading;

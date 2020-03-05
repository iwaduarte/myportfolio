function animateBar(props) {
    if (!props) return; //throw Error would be better in that case
    const {barWidth, seconds, currentBarWidth, refreshTime} = props;

    if (!barWidth || !seconds || !currentBarWidth || !refreshTime) //missing vital properties;
        return;

    const COUNT_DOWN_MILLISECONDS = seconds * 1000;
    //calculating how many pixels should be taken from the bar width
    const decrementBar = refreshTime * barWidth / COUNT_DOWN_MILLISECONDS;

    return currentBarWidth - decrementBar;
}
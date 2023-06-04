export const runningLine = () => {
  const SPEEDMOVE = 30;

  $(".section-top__running-line .running-line__content-wrap").marquee({
    direction: "left",
    speed: SPEEDMOVE,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  $(".why__running-line .running-line__content-wrap").marquee({
    direction: "right",
    speed: SPEEDMOVE,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  $(".team__slider").marquee({
    direction: "right",
    speed: 15,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  $(".differences__running-line-top .running-line__content-wrap").marquee({
    direction: "right",
    speed: SPEEDMOVE,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  $(".differences__running-line-bottom .running-line__content-wrap").marquee({
    direction: "right",
    speed: SPEEDMOVE,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  $(".steps__running-line-top").liMarquee({
    scrollamount: SPEEDMOVE,
    drag: false,
    hoverstop: false,
  });

  $(".team__running-line .running-line__content-wrap").marquee({
    direction: "right",
    speed: 25,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });
};

import { rgba } from 'polished';

export default (theme) => {
  return {
    root: {
      position: 'relative',
      display: 'block',
      margin: [0, 0, theme.margin],
      width: '100%',
      minHeight: 1,

      '&$entering, &$exiting, &$exited': {
        '& $img, & $caption': {
          opacity: 0,
        },
        '& $separator': {
          width: 0,
        }
      },
    },
    img: {
      display: 'block',
      border: 'none',
      margin: 0,
      padding: 0,
      width: '100%',
      height: 'auto',
      verticalAlign: 'top',
      boxShadow: 'none',
      transition: `all ${theme.animTime}ms ease-in`,
      opacity: 1,
    },
    separator: {
      position: 'absolute',
      top: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'block',
      width: '100%',
      borderStyle: 'solid',
      borderColor: props => rgba(theme.color[props.layer].dark, theme.alpha / 2),
      borderWidth: '0 0 1px',
      transition: `all ${theme.animTime}ms ease-in`,
    },
    caption: {
      display: 'block',
      margin: 0,
      padding: theme.padding / 2,
      textAlign: 'center',
      backgroundColor: props => theme.background[props.layer].level1,
      transition: `opacity ${theme.animTime}ms ease-in`,
      opacity: 1,
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {},
  };
};
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Paper, Slider, FormControl, InputLabel, Select } from '@material-ui/core';
import { SketchPicker } from 'react-color';

function App() {
  const [name, setName] = useState("bay");
  const [fontSize, setFontSize] = useState(100);
  const [paddingTopText, setPaddingTopText] = useState(0);
  const [paddingBottomText, setPaddingBottomText] = useState(0);
  const [paddingLeftText, setPaddingLeftText] = useState(0);
  const [paddingRightText, setPaddingRightText] = useState(0);
  const [colorGradient1, setColorGradient1] = useState({a: 1, b: 161, g: 36, r: 153});
  const [colorGradient2, setColorGradient2] = useState({a: 1, b: 214, g: 81, r: 4});
  const [slider1, setSlider1] = useState(114);
  const [mixBlendModeGradient, setMixBlendModeGradient] = useState("multiply"); 
  const [mixBlendModeText, setMixBlendModeText] = useState("difference"); 
  const [alignItems, setAlignItems] = useState("center"); 
  const [gradientSet, setGradientSet] = useState("circle");
  const [animationSpeed, setAnimationSpeed] = useState(3);

  const mixBlendModeModes = [
    <option value='normal'>normal</option>,
    <option value='multiply'>multiply</option>,
    <option value='screen'>screen</option>,
    <option value='darken'>darken</option>,
    <option value='lighten'>lighten</option>,
    <option value='color-dodge'>color-dodge</option>,
    <option value='color-burn'>color-burn</option>,
    <option value='hard-light'>hard-light</option>,
    <option value='soft-light'>soft-light</option>,
    <option value='difference'>difference</option>,
    <option value='exclusion'>exclusion</option>,
    <option value='hue'>hue</option>,
    <option value='saturation'>saturation</option>,
    <option value='color'>color</option>,
    <option value='luminosity'>luminosity</option>,
    <option value='initial'>initial</option>,
    <option value='inherit'>inherit</option>,
    <option value='unset'>unset</option>,
  ]

  const positionOptions = [
    <option value='flex-start'>flex-start</option>,
    <option value='flex-end'>flex-end</option>,
    <option value='center'>center</option>,
    <option value='baseline'>baseline</option>,
    <option value='stretch'>stretch</option>,
    <option value='inherit'>inherit</option>,
    <option value='initial'>initial</option>,
    <option value='unset'>unset</option>,
  ]

  const gradientForm = [
    <option value="ellipse">ellipse</option>,
    <option value="circle">circle</option>,
  ]

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    '@keyframes reveal': {
      '80%': {
        letterSpacing: '8px'
      },
      '100%': {
        backgroundSize: '300% 300%'
      }
    },
    '@keyframes glow': {
      '40%': {
        textShadow: '0 0 8px #fff'
      }
    },
    animatedTextWrapper: {
      display: 'flex',
      alignItems: alignItems,
      justifyContent: 'center',
      background: '#000000',
      height: '808px',
      width: '506px',
      position: 'static'
    },
    animatedText: {
      color: '#ffffff',
      background: '#000000',
      fontSize: `${fontSize}px`,
      fontWeight: 'italic',
      fontFamily: 'SF Pro Display',
      position: 'relative',
      paddingTop: `${paddingTopText}px`,
      paddingBottom: `${paddingBottomText}px`,
      paddingLeft: `${paddingLeftText}px`,
      paddingRight: `${paddingRightText}px`,
      animation: `$glow ${animationSpeed}s linear infinite`,
      '&::before': {
        content: `"${name}"`,
        position: 'absolute',
        mixBlendMode: mixBlendModeText,
        filter: 'blur(3px)',
      }
    },
    animatedTextNeonWrapper: {
      display: 'inline-flex',
      filter: 'brightness(200%)',
      overflow: 'hidden',
    },
    animatedTextGradient: {
      background: `linear-gradient(${slider1}deg, rgba(${colorGradient1.r}, ${colorGradient1.g}, ${colorGradient1.b}, ${colorGradient1.a}) 4.927083333333334%,rgba(${colorGradient2.r}, ${colorGradient2.g}, ${colorGradient2.b}, ${colorGradient2.a}) 97.84374999999999%)`,
      position: 'absolute',
      top: 0,
      left:0,
      width: '100%',
      height: '100%',
      mixBlendMode: mixBlendModeGradient
    },
    '@keyframes dodge-area': {
      to: {
          transform: 'translate(50%,50%)'
      }
    },
    animatedTextDodge: {
      background: 'radial-gradient(circle ,white,black 35%) center / 25% 25%',
      position: 'absolute',
      top: '-100%',
      left: '-100%',
      right:0,
      bottom:0,
      mixBlendMode: 'color-dodge',
      animation: `$dodge-area ${animationSpeed}s linear infinite`
    },
    sliderWrapper: {
      width: 300
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();

  const handleNameChange = event => setName(event.target.value)
  const handleFontSize = event => setFontSize(event.target.value)
  const handleGradientColorChangeA = (color) => setColorGradient1(color.rgb)
  const handleGradientColorChangeB = (color) => setColorGradient2(color.rgb)
  const handleSlider1Change = (event, value) => setSlider1(value)
  const handleGradientBlendModeChange = event => setMixBlendModeGradient(event.target.value)
  const handleTextBlendModeChange = event => setMixBlendModeText(event.target.value)
  const handleAlignItems = event => setAlignItems(event.target.value)
  const handlePaddingTopText = event => setPaddingTopText(event.target.value)
  const handlePaddingBottomText = event => setPaddingBottomText(event.target.value)
  const handlePaddingLeftText = event => setPaddingLeftText(event.target.value)
  const handlePaddingRightText = event => setPaddingRightText(event.target.value)
  const handleGradientForm = event => setGradientSet(event.target.value)
  const handleAnimationSpeed = event => setAnimationSpeed(event.target.value)

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item>
          <Paper square elevation={3}>
            <div className={classes.animatedTextWrapper}>
              <div className={classes.animatedTextNeonWrapper}>
                  <span id="nameFitty" className={classes.animatedText} >{name}</span>
                  <span className={classes.animatedTextGradient}></span>
                  <span className={classes.animatedTextDodge}></span>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item><Typography>Text options</Typography></Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <TextField id="outlined-name" label="Name" variant="outlined" value={name} onChange={handleNameChange} />
              </Grid>
              <Grid item>
                <TextField id="outlined-name" input="number" label="Font Size" variant="outlined" value={fontSize} onChange={handleFontSize} />
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="gg3-native-simple">Text mix blend mode</InputLabel>
                  <Select
                    native
                    value={mixBlendModeText}
                    onChange={handleTextBlendModeChange}
                    inputProps={{
                      name: 'mixBlendModeText',
                      id: 'mixBlendModeText',
                    }}
                  >
                    {mixBlendModeModes}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item><Typography>Text Position</Typography></Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <TextField id="outlined-name" input="number" label="Padding Top" variant="outlined" value={paddingTopText} onChange={handlePaddingTopText} />
              </Grid>
              <Grid item>
                <TextField id="outlined-name" input="number" label="Padding Bottom" variant="outlined" value={paddingBottomText} onChange={handlePaddingBottomText} />
              </Grid>
              <Grid item>
                <TextField id="outlined-name" input="number" label="Padding Left" variant="outlined" value={paddingLeftText} onChange={handlePaddingLeftText} />
              </Grid>
              <Grid item>
                <TextField id="outlined-name" input="number" label="Padding Right" variant="outlined" value={paddingRightText} onChange={handlePaddingRightText} />
              </Grid>
            </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="gg3-native-simple">Text alignItems</InputLabel>
                  <Select
                    native
                    value={alignItems}
                    onChange={handleAlignItems}
                    inputProps={{
                      name: 'alignItems',
                      id: 'alignItems',
                    }}
                  >
                    {positionOptions}
                  </Select>
                </FormControl>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={2}>
            <Grid item><Typography>Gradient</Typography></Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <SketchPicker
                  color={colorGradient1}
                  id="colorGradient1"
                  onChangeComplete={handleGradientColorChangeA}
                />
              </Grid>
              <Grid item>
                <SketchPicker
                  color={colorGradient2}
                  id="colorGradient2"
                  onChangeComplete={handleGradientColorChangeB}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs>
                    <div className={classes.sliderWrapper}>
                      <Typography id="discrete-slider" gutterBottom>
                        {slider1}°
                      </Typography>
                      <Slider
                        value={slider1}
                        onChange={handleSlider1Change}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={0}
                        max={360}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="gg3-native-simple">Gradient mix blend mode</InputLabel>
                  <Select
                    native
                    value={mixBlendModeGradient}
                    onChange={handleGradientBlendModeChange}
                    inputProps={{
                      name: 'mixBlendModeGradient',
                      id: 'mixBlendModeGradient',
                    }}
                  >
                    {mixBlendModeModes}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="gg3-native-simple">Linear Gradient Set</InputLabel>
                  <Select
                    native
                    value={gradientSet}
                    onChange={handleGradientForm}
                    inputProps={{
                      name: 'gradientSet',
                      id: 'gradientSet',
                    }}
                  >
                    {gradientForm}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
                <TextField id="outlined-name" input="number" label="Animation speed" variant="outlined" value={animationSpeed} onChange={handleAnimationSpeed} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;

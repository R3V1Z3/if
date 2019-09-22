# IF

Interactive Fiction ala Inform via Parchment using GitDown. Select a story from the Story dropdown or click the dropdown and paste in a story url to play.

## Usage

- Post your code for free on [GitHub Gist](https://gist.github.com).
- Paste the URL or ID in the Content field.

# IF `🅑-nav`

Interactive Fiction Player

-----

`ⓘ The code below designates a list of content sources the user will be able to select from in the app.`

content `🅑-datalist`
- [IF](stories/IF.gblorb)
- [Sorcerer](https://cdn.rawgit.com/darrenaustin/zcode/9e431fcb/games/Sorcerer.z3)
- [Enchanter](https://cdn.rawgit.com/darrenaustin/zcode/9e431fcb/games/Enchanter.z3)
- [A Mind Forever Voyaging](https://cdn.rawgit.com/darrenaustin/zcode/9e431fcb/games/A%20Mind%20Forever%20Voyaging.z4)

story `🅑-datalist`
- [IF](stories/IF.gblorb)
- [Sorcerer](https://cdn.jsdelivr.net/gh/darrenaustin/zcode@9e431fcb908817eab71cda6cf2d1d003c1f40a5c/games/Sorcerer.z3)
- [Enchanter](https://cdn.jsdelivr.net/gh/darrenaustin/zcode@9e431fcb908817eab71cda6cf2d1d003c1f40a5c/games/Enchanter.z3)
- [A Mind Forever Voyaging](https://cdn.jsdelivr.net/gh/darrenaustin/zcode@9e431fcb908817eab71cda6cf2d1d003c1f40a5c/games/A%20Mind%20Forever%20Voyaging.z4)

-----

## Appearance `🅑-collapsible`

css `🅑-datalist`
- [Dark Glow](https://gist.github.com/c6d0a4d16b627d72563b43b60a164c31)

font-effect `🅑-select`
- *None
- 3d
- 3d Float
- Anaglyph
- Brick sign
- Canvas Print
- Crackle
- Decaying
- Destruction
- Distressed
- Distressed Wood
- Emboss
- Fire
- Fire Animation
- Fragile
- Grass
- Ice
- Mitosis
- Neon
- Outline
- Putting Green
- Scuffed Steel
- Shadow Multiple
- Splintered
- Static
- Stonewash
- Vintage
- Wallpaper

`🅑-theme-variables`

## Effects `🅑-collapsible`

vignette `🅑-slider="1,0,3,0.05"`

tiltshift `🅑-select`
- None
- *Elegant
- Extreme

svg-filter `🅑-select`
- *None

-----

brightness `🅑-slider="1,0,3,0.05"`
contrast `🅑-slider="100%,0,300,1,%"`
grayscale `🅑-slider="0%,0,100,1,%"`
hue-rotate `🅑-slider="0deg,0,360,1,deg"`
invert `🅑-slider="0%,0,100,1,%"`
saturate `🅑-slider="100%,0,300,1,%"`
sepia `🅑-slider="0%,0,100,1,%"`
blur `🅑-slider="0px,0,20,1,px"`

## Perspective `🅑-collapsible`

scale `🅑-slider="0,1,5,0.1"`
perspective `🅑-slider="800px,0,2000,1,px"`
originx `🅑-slider="50%,0,100,1,%"`
originy `🅑-slider="50%,0,100,1,%"`
rotatex `🅑-slider="20deg,0,360,1,deg"`
rotatey `🅑-slider="10deg,0,360,1,deg"`
scalez `🅑-slider="0,1,5,0.1"`
rotatez `🅑-slider="0deg,0,360,1,deg"`
translatez `🅑-slider="0px,-500,500,1,px"`

## Dimensions `🅑-collapsible`

width `🅑-slider="60ch,4,400,1,ch"`
padding `🅑-slider="1ch,0,100,1,ch"`
inner-space `🅑-slider="10ch,0,300,1,ch"`
outer-space `🅑-slider="0ch,0,1000,1,ch"`
offsetx `🅑-slider="0px,-4000,4000,1,px"`
offsety `🅑-slider="0px,-4000,4000,1,px"`

## Presets `🅑-collapsible`

Ready-made templates:
- [Cogito](?content=1afacb7b662cfbfd0624e52c6425ceee&highlight=foundation&fontsize=150&width=50&originy=62&rotatez=343&translatez=-141&tiltshift=elegant&offsetx=286&offsety=-269&bg=Ivory&vignette=0.5) - Minimalism with soft vignette.
- [ArtsASCII Artist](?content=9c6043905e891bd2423af86d09bd950c&css=adc373c2d5a5d2b07821686e93a9630b&font-effect=3d&vignette=0.7&offsetx=-85&offsety=191&tiltshift=None&font=Cutive%20Mono&color=Azure&width=27&padding=15&inner-space=0&rotatex=5&rotatez=350&translatez=429&bg=MediumSlateBlue&fontsize=150&svg-filter=Cross%20Noise-f205&contrast=120) - Pseudo 3D styling for @ArtsASCII art.
- [Wood Vim Plastered](?content=5611986&css=e9dc237da3d9bda63302fe4b659c20b5&highlight=agate&fontsize=160&font=fira-mono&brightness=1.1&contrast=300&saturate=141&perspective=1017&originy=20&rotatey=347&translatez=-500&tiltshift=none&svg-filter=Plaster%20Color-f123&offsetx=-167&offsety=-26&width=51) - Vim ASCII art plastered in wood backdrop.
- [The Digital Plain](?content=9ef934473e4cf4d50d8b06d2598b24d1&css=a634da7b7130fd40d682360154cc4e2e&perspective=435&translatex=-820&brightness=0.8&contrast=173&rotatex=25&vignette=0.7&rotatez=338&scale=1.5&rotatey=3&translatez=-343&padding=0&offsetx=71&offsety=-224&bg=HotPink&color=initial&fontsize=150&width=75&inner-space=60&originy=44&saturate=228&font-effect=Scuffed%20Steel) - Seeminly endless plain of digital beauty.
- [Flourescence](?highlight=hopscotch&tiltshift=elegant&vignette=0.5&brightness=2.5&contrast=205&scale=0.9&perspective=1500&rotatex=344&rotatey=352&scalez=1&rotatez=10&translatez=0&bg=cornsilk&fontsize=178&rotateX=344&rotateY=352&scaleZ=1&rotateZ=10&translateZ=0&content=ff9e36538de06b6a0b40a96252d58dc5&css=c6d0a4d16b627d72563b43b60a164c31&primary-color=slategrey&offsetX=-120&offsetY=200) - Dark theme with vivid highlights.
- [Tron 0.5](?content=7c3c43ebee017e4b8a743e391c1acfd4&css=adc373c2d5a5d2b07821686e93a9630b&bg=darkcyan&brightness=1.05&contrast=150&perspective=932&rotatex=14&rotatez=351&translatez=-160&offsetx=86&offsety=-132&width=90&fontsize=150&vignette=0.15&tiltshift=Extreme&font-effect=3d) - Vibrant, Tron-like tech theme.
- [Old West](?content=8665367&css=76c39d26b1b44e07bd7a783311caded8&highlight=brown-paper&font-effect=canvas-print&tiltshift=none&vignette=0.55&brightness=1.1&contrast=151&saturate=66&scale=2.4&perspective=451&rotatex=342&rotatey=0&translatez=-40&padding=25&font=fira-code-iscript&inner-space=200&width=78&offsetx=151&offsety=40) - Codin' done that old fashioned typewrited way.
- [Scribbled Code](?content=ff9e36538de06b6a0b40a96252d58dc5&css=77b1f66ad5093c2db29c666ad15f334d&highlight=arduino-light&font-effect=canvas-print&tiltshift=none&vignette=0.175&contrast=101&saturate=99&sepia=28&perspective=2000&rotatex=348&rotatez=10&offsetx=135&offsety=89&width=126) - Scribbled notes on aged graph paper.
- [Archaic Tech](?content=bcd81019340cb164191ef02db16be218&css=e27b284231488b349f35786f6340096a&font=fira-code-iscript&tiltshift=none&vignette=1&brightness=1.5&contrast=90&saturate=70&sepia=20&perspective=1133&rotatex=35&rotatey=3&rotatez=7&translatez=-188&offsetx=-17&offsety=-193&bg=darkcyan&width=78&inner-space=110) - That old tablet got lost in the omniverse.
- [Basically](?content=399b69445ae646c0160d644db08f5ed9&css=adc373c2d5a5d2b07821686e93a9630b&highlight=grayscale&font=fira-code-iscript&scale=1.41&rotateX=15&rotateY=3&scaleZ=1&rotateZ=10&padding=2&offsetX=100&offsetY=264&bg=cornsilk&offsetx=22&offsety=280) - Elegant, minimalist theme using mostly default settings.
- [Nyanyan](?content=3062237&css=c6d0a4d16b627d72563b43b60a164c31&highlight=xcode&font=anonymous-pro&font-effect=3d&tiltshift=extreme&svg-filter=Hue%20to%20White-f182&vignette=0.925&brightness=1.65&contrast=137&scale=1.55&rotatex=0&rotatey=0&rotatez=348&offsetx=-135&offsety=44&fontsize=75&width=112&inner-space=180&translatez=-176) - Dark backdrop accented by bright foreground colors.
- [The Grid](?content=9ef934473e4cf4d50d8b06d2598b24d1&css=e27b284231488b349f35786f6340096a&bg=chocolate&svg-filter=Glowing%20Metal-f044&vignette=0.3&brightness=1.2&contrast=164&hue-rotate=45&invert=100&saturate=57&sepia=52&scale=1.3&perspective=792&rotatex=12&rotatez=360&translatez=199&padding=12&offsetx=114&offsety=10&width=75) - Top secret coordinates to the heavens.
- [NeoVIM Brilliance](?content=2c928108d1fa87ab4462fad9be99ebec&css=a634da7b7130fd40d682360154cc4e2e&highlight=kimbie-dark&font-effect=3d&vignette=0.7&offsetx=283&offsety=159&bg=darkmagenta&fontsize=232&font=fira-code-iscript&brightness=1.6&contrast=198&rotatex=6&rotatez=6&translatez=90&width=70&inner-space=50&hue-rotate=335) - Brilliant code demands brilliant visuals.

## Help `🅑-group`

`🅑-help="https://github.com/ugotsta/code-glory/#code-glory"`
`🅑-hide`

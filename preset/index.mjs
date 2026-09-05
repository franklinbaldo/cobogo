import { definePreset } from '@pandacss/dev'

const cobogo = definePreset({
  name: 'cobogo',
  globalCss: {
    html: {
      background: 'canvas',
      color: 'text',
      fontFamily: 'body',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: '0',
      minHeight: '100vh',
      background: 'canvas',
    },
    '::selection': {
      background: 'accent',
      color: 'accentText',
    },
    a: { color: 'inherit' },
  },
  theme: {
    tokens: {
      colors: {
        ink: { value: '#17221f' },
        paper: { value: '#f4f0e6' },
        sand: { value: '#e7dfce' },
        white: { value: '#fffdf8' },
        lime: { value: '#d5f03f' },
        coral: { value: '#ed654b' },
        blue: { value: '#235f77' },
        muted: { value: '#62665f' },
        line: { value: '#bdb5a5' },
      },
      fonts: {
        body: { value: '"Helvetica Neue", Arial, sans-serif' },
        display: { value: '"Arial Narrow", "Helvetica Neue", Arial, sans-serif' },
        mono: { value: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.25rem' },
        xl: { value: '1.6rem' },
        '2xl': { value: '2.4rem' },
        '3xl': { value: 'clamp(3.4rem, 8vw, 8rem)' },
      },
      fontWeights: {
        regular: { value: '400' },
        medium: { value: '600' },
        bold: { value: '800' },
        black: { value: '900' },
      },
      lineHeights: {
        tight: { value: '0.9' },
        heading: { value: '1.05' },
        body: { value: '1.55' },
      },
      spacing: {
        '1': { value: '0.25rem' },
        '2': { value: '0.5rem' },
        '3': { value: '0.75rem' },
        '4': { value: '1rem' },
        '5': { value: '1.25rem' },
        '6': { value: '1.5rem' },
        '8': { value: '2rem' },
        '10': { value: '2.5rem' },
        '12': { value: '3rem' },
        '16': { value: '4rem' },
        '20': { value: '5rem' },
        '24': { value: '6rem' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0.2rem' },
        md: { value: '0.45rem' },
        pill: { value: '999px' },
      },
      shadows: {
        lift: { value: '0 18px 50px rgba(23, 34, 31, 0.12)' },
      },
      sizes: {
        content: { value: '76rem' },
        reading: { value: '68ch' },
      },
    },
    semanticTokens: {
      colors: {
        canvas: { value: '{colors.paper}' },
        surface: { value: '{colors.white}' },
        surfaceMuted: { value: '{colors.sand}' },
        text: { value: '{colors.ink}' },
        textMuted: { value: '{colors.muted}' },
        border: { value: '{colors.line}' },
        accent: { value: '{colors.lime}' },
        accentText: { value: '{colors.ink}' },
        info: { value: '{colors.blue}' },
        attention: { value: '{colors.coral}' },
      },
    },
    breakpoints: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
    },
    textStyles: {
      display: {
        value: {
          fontFamily: 'display',
          fontWeight: 'black',
          fontSize: '3xl',
          lineHeight: 'tight',
          letterSpacing: '-0.055em',
          textTransform: 'uppercase',
        },
      },
      title: {
        value: {
          fontFamily: 'display',
          fontWeight: 'black',
          fontSize: '2xl',
          lineHeight: 'heading',
          letterSpacing: '-0.035em',
        },
      },
      eyebrow: {
        value: {
          fontFamily: 'body',
          fontWeight: 'bold',
          fontSize: 'xs',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        },
      },
      body: {
        value: {
          fontFamily: 'body',
          fontSize: 'md',
          lineHeight: 'body',
        },
      },
    },
    recipes: {
      button: {
        className: 'cobogo-button',
        base: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '3rem',
          px: '5',
          border: '1px solid',
          borderColor: 'text',
          fontWeight: 'bold',
          fontSize: 'sm',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'transform 120ms ease, box-shadow 120ms ease',
          _hover: { transform: 'translateY(-2px)', boxShadow: 'lift' },
          _focusVisible: { outline: '3px solid', outlineColor: 'info', outlineOffset: '3px' },
        },
        variants: {
          visual: {
            solid: { background: 'accent', color: 'accentText', borderColor: 'accent' },
            outline: { background: 'transparent', color: 'text' },
            light: { background: 'transparent', color: 'canvas', borderColor: 'canvas' },
            dark: { background: 'text', color: 'canvas', borderColor: 'text' },
          },
          size: {
            sm: { minHeight: '2.5rem', px: '4', fontSize: 'xs' },
            md: { minHeight: '3rem', px: '5', fontSize: 'sm' },
          },
        },
        defaultVariants: { visual: 'solid', size: 'md' },
      },
      card: {
        className: 'cobogo-card',
        base: {
          background: 'surface',
          border: '1px solid',
          borderColor: 'border',
          p: '6',
        },
        variants: {
          tone: {
            plain: {},
            muted: { background: 'surfaceMuted' },
            dark: { background: 'text', color: 'canvas', borderColor: 'text' },
            attention: { background: 'attention', color: 'text', borderColor: 'text' },
          },
          lift: {
            flat: {},
            raised: { boxShadow: 'lift' },
          },
        },
        defaultVariants: { tone: 'plain', lift: 'flat' },
      },
      badge: {
        className: 'cobogo-badge',
        base: {
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '1.7rem',
          px: '3',
          border: '1px solid',
          borderColor: 'currentColor',
          fontSize: 'xs',
          fontWeight: 'bold',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        },
        variants: {
          tone: {
            neutral: { color: 'text' },
            info: { background: 'info', color: 'surface', borderColor: 'info' },
            attention: { background: 'attention', color: 'text', borderColor: 'attention' },
            accent: { background: 'accent', color: 'accentText', borderColor: 'accent' },
          },
        },
        defaultVariants: { tone: 'neutral' },
      },
      input: {
        className: 'cobogo-input',
        base: {
          width: '100%',
          minHeight: '3rem',
          px: '4',
          background: 'surface',
          color: 'text',
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 'none',
          font: 'inherit',
          _placeholder: { color: 'textMuted' },
          _focus: { outline: '3px solid', outlineColor: 'accent', outlineOffset: '0' },
        },
        variants: {
          density: {
            compact: { minHeight: '2.5rem', px: '3', fontSize: 'sm' },
            comfortable: { minHeight: '3rem', px: '4', fontSize: 'md' },
          },
        },
        defaultVariants: { density: 'comfortable' },
      },
      alert: {
        className: 'cobogo-alert',
        base: {
          display: 'grid',
          gap: '2',
          p: '5',
          borderLeft: '0.5rem solid',
          fontSize: 'sm',
        },
        variants: {
          tone: {
            info: { background: 'surfaceMuted', borderColor: 'info' },
            attention: { background: 'attention', borderColor: 'text', color: 'text' },
            success: { background: 'accent', borderColor: 'text', color: 'text' },
          },
        },
        defaultVariants: { tone: 'info' },
      },
      article: {
        className: 'cobogo-article',
        base: {
          maxWidth: 'reading',
          fontSize: 'lg',
          lineHeight: 'body',
          '& p + p': { mt: '5' },
          '& h2': { mt: '12', mb: '4', textStyle: 'title' },
          '& a': { textDecorationThickness: '2px', textUnderlineOffset: '0.18em' },
        },
        variants: {
          density: {
            editorial: { fontFamily: 'body' },
            compact: { fontSize: 'md', lineHeight: 'body' },
          },
        },
        defaultVariants: { density: 'editorial' },
      },
      table: {
        className: 'cobogo-table',
        base: {
          width: '100%',
          borderCollapse: 'collapse',
          fontVariantNumeric: 'tabular-nums',
          '& th': { textAlign: 'left', fontSize: 'xs', textTransform: 'uppercase', letterSpacing: '0.06em' },
          '& th, & td': { py: '3', px: '3', borderBottom: '1px solid', borderColor: 'border' },
          '& tbody tr:hover': { background: 'surfaceMuted' },
        },
        variants: {
          density: {
            compact: { '& th, & td': { py: '2' } },
            comfortable: { '& th, & td': { py: '4' } },
          },
        },
        defaultVariants: { density: 'compact' },
      },
      navLink: {
        className: 'cobogo-nav-link',
        base: {
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '2.5rem',
          fontSize: 'xs',
          fontWeight: 'bold',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderBottom: '2px solid transparent',
          _hover: { borderColor: 'currentColor' },
          _focusVisible: { outline: '3px solid', outlineColor: 'accent', outlineOffset: '3px' },
        },
        variants: {
          active: {
            true: { borderColor: 'currentColor' },
          },
        },
      },
    },
  },
})

export default cobogo

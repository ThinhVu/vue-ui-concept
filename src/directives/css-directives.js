const useLayoutDirectives = (app) => {
  const behaviorClasses = [
    'clickable',
    'disable'
  ];

  const colorClasses = [];
  ;[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => colorClasses.push(...[
    `c-r-${i}`,
    `c-p-${i}`,
    `c-pp-${i}`,
    `c-dpp-${i}`,
    `c-i-${i}`,
    `c-b-${i}`,
    `c-lb-${i}`,
    `c-gre-${i}`,
    `bc-r-${i}`,
    `bc-p-${i}`,
    `bc-pp-${i}`,
    `bc-dpp-${i}`,
    `bc-i-${i}`,
    `bc-b-${i}`,
    `bc-lb-${i}`,
    `bc-gre-${i}`,
    `bc-gray-${i}`,
    `bc-gray-${i}-5`
  ]))

  const layoutClasses = [
    // sizing
    'h-100', 'h-100vh', 'w-100', 'w-100vw',
    // flexbox layout
    'fr', 'fc',
    {
      name: 'f-gap',
      handler: (el, binding) => {
        if (el.style) {
          el.style.gap = binding.value
        } else {
          el.style = {
            gap: binding.value
          }
        }
      }
    },

    'ai-bl', 'ai-c', 'ai-fe', 'ai-s',
    'jc-c', 'jc-sa', 'jc-sb', 'jc-se', 'jc-fe', 'jc-fs', 'jc-n', 'jc-r',
    // grid layout
    'g',
    {
      name: 'g-t-c',
      handler: (el, binding) => {
        if (el.style) {
          el.style.gridTemplateColumns = binding.value
        } else {
          el.style = {
            gridTemplateColumns: binding.value
          }
        }
      }
    },
    {
      name: 'g-t-r',
      handler: (el, binding) => {
        if (el.style) {
          el.style.gridTemplateRows = binding.value
        } else {
          el.style = {
            gridTemplateRows: binding.value
          }
        }
      }
    },
    {
      name: 'g-gap',
      handler: (el, binding) => {
        if (el.style) {
          el.style.gridGap = binding.value
        } else {
          el.style = {
            gridGap: binding.value
          }
        }
      }
    },
    {
      name: 'g-area',
      handler: (el, binding) => {
        if (el.style) {
          el.style.gridArea = binding.value
        } else {
          el.style = {
            gridArea: binding.value
          }
        }
      }
    },
    `br-50`, `br-100`, `br-9999`,
    // overflow
    `ovf-h`, `ovf-x-s`, `ovf-y-s`, `ovf-hsb`
  ]
  ;[1, 2, 3, 4, 5].forEach(i => {
    layoutClasses.push(`fg-${i}`, `f${i}`, `br-${i}`)
  });

  const positionClasses = [
    'p-abs', 'p-fixed', 'p-rel', 'p-static', 'p-sticky',
    'top-0', 'right-0', 'bottom-0', 'left-0'
  ]

  const spacingClasses = [`mx-a`, `my-a` ]
  ;[0, 1, 2, 3, 4, 5].forEach(i => spacingClasses.push(...[
    `pt-${i}`, `pb-${i}`, `pl-${i}`, `pr-${i}`,
    `px-${i}`, `py-${i}`, `pa-${i}`,
    `mt-${i}`, `mb-${i}`, `ml-${i}`, `mr-${i}`,
    `mx-${i}`, `my-${i}`,
  ]));

  const txtClasses = [
    'ta-l', 'ta-r'
  ]

  const directives = [
    ...behaviorClasses,
    ...colorClasses,
    ...layoutClasses,
    ...positionClasses,
    ...spacingClasses,
    ...txtClasses
  ]

  for (const directive of directives) {
    if (typeof directive === 'string') {
      app.directive(directive, el => el.classList.add(directive))
    } else {
      const { name, handler } = directive
      app.directive(name, handler)
    }
  }
}

export default useLayoutDirectives

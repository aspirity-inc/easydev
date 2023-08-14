---
title: Components
---

## [Box](#box)

Box is based on React and Styled Components. Example:

```ts
export const StyledTitle = styled(Box)<TitleProps>`
  margin: 0;
  padding: 0;

  ${({ variant }) => getTitleVariant(variant)};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};
`;
```

## [Breadcrumbs](#breadcrumbs)

Breadcrumbs are based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumb>Main</Breadcrumb>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Contacts</Breadcrumb>
      <Breadcrumb>About us</Breadcrumb>
    </Breadcrumbs>
  );
};
```

## [Chips](#chips)

Chips are based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return (
    <div>
      <Chip {...args} label="Selected chip" defaultChecked onDelete={undefined} />
      <Chip {...args} label="Selected chip with delete button" defaultChecked />
      <Chip {...args} label="Disabled chip" disabled />
    </div>
  );
};
```

## [Controls](#controls)

### [Checkbox](#controls/checkbox)

Checkbox is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Checkbox checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change checkbox
      </Button>
    </div>
  );
};
```

### [ControlWithLabel](#controls/control-with-label)

Control With Label is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return (
    <Space>
      <ControlWithLabel label="Toggle 1" {...args} control={<Toggle />} />
    </Space>
  );
};
```

### [Radio](#controls/radio)

Radio is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Radio checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change Radio
      </Button>
    </div>
  );
};
```

### [Toggle](#controls/toggle)

Toggle is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return <Toggle checked={checked} onChange={handleChange} {...args} />;
};
```

## [Datepicker](#datepicker)

Datepicker is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div style={{ height: '500px' }}>
      <Datepicker {...args} selected={startDate} onChange={setStartDate} />
    </div>
  );
};
```

## [Inputs](#inputs)

### [Input](#inputs/input)

Input is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} {...args} />;
};
```

### [MaskedInput](#inputs/masked-input)

Masked Input is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <MaskedInput value={value} onChange={onChange} {...args} />;
};
```

### [Textarea](#inputs/textarea)

Textarea is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return <Textarea value={value} onChange={onChange} {...args} />;
};
```

## [Link](#link)

Link is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  return <Link {...args}>Go to the google!!!</Link>;
};
```

## [Modal](#modal)

### [BaseModal](#modal/base-modal)

Base Modal is based on React and Styled Components. Example:

```ts
const Example = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <BaseModal {...args} open={open} onClose={handleClose}>
        {children}
      </BaseModal>
    </>
  );
};
```

### [InfoModal](#modal/info-modal)

Info Modal is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <InfoModal {...args} open={open} onClose={handleClose} portal={portal}>
        <ModalHeader />
        <ModalBody
          image={ModalImage}
          title="Window"
          text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
        />
        <ModalFooter
          footerContent={() => (
            <>
              <Button size="sm" rounded="sm">
                learn more
              </Button>
              <Button variant="secondary" size="sm" rounded="sm">
                got it
              </Button>
            </>
          )}
        />
      </InfoModal>
      <div
        id="portalElement"
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '800px', height: '600px' }}
      >
        Portal field
      </div>
    </>
  );
};
```

## [Popover](#popover)

Popover is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  return (
    <div
      style={{
        width: '600px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover {...args}>
        <Button>Open popover</Button>
      </Popover>
    </div>
  );
};
```

## [Progress](#progress)

### [ProgressBar](#progress/progress-bar)

Progress Bar is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return <ProgressBar {...args} value={25} />;
};
```

### [ProgressBarWithTitle](#progress/progress-bar-with-title)

Progress Bar With Title is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return <ProgressBar {...args} value={25} title="Update in progress.." />;
};
```

### [RangeSlider](#progress/range-slider)

Range Slider is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('25');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <RangeSlider {...args} value={value} onChange={onChange} min="0" max="100" {...args} />;
};
```

### [Stepper](#progress/stepper)

Stepper is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  return <Stepper {...args} count={10} currentStep={3} numeric={true} />;
};
```

## [Select](#select)

Select is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState<OptionType[]>([]);

  const handleSelectChange = (values: unknown) => {
    setValue(values as OptionType[]);
  };

  return (
    <div style={{ height: '350px' }}>
      <Select
        {...args}
        value={value}
        onChange={handleSelectChange}
        selectedStatePlaceholder={`YourChoice: ${value.length}`}
      />
    </div>
  );
};
```

## [Space](#space)

Space is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  return (
    <Space {...args}>
      <ControlWithLabel label="Radio 1" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 2" control={<Radio name="name" defaultChecked />} />
      <ControlWithLabel label="Radio 3" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 4" control={<Radio name="name" />} />
    </Space>
  );
};
```

## [Tabs](#tabs)

Tabs are based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  return (
    <Tabs {...args}>
      <Tab eventKey={0} title="Tab1">
        Tab 1 content
      </Tab>
      <Tab eventKey={1} title="Tab2">
        Tab 2 content
      </Tab>
      <Tab eventKey={2} title="Tab3">
        Tab 3 content
      </Tab>
      <Tab eventKey={3} title="Tab4" disabled>
        Tab 4 content
      </Tab>
    </Tabs>
  );
};
```

## [Theme](#theme)

Theme is based on React and Styled Components. Example:

```ts
export const withTheme = (Story, context) => {
  const { backgrounds } = context.globals;
  const theme = backgrounds?.value !== darkTheme.colors.background ? THEMES['light'] : THEMES['dark'];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
```

## [Toast](#toast)

### [Toast](#toast/toast)

Toast is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const toastArgs = { ...args, onDelete: () => null };
  return (
    <Space direction="column">
      <Toast {...toastArgs} title={'Info notification'} description={'Text'} status="info" />
      <Toast
        {...toastArgs}
        title={'Success notification'}
        description={'Text'}
        status="success"
        autoCloseDelay={6000}
      />
      <Toast
        {...toastArgs}
        title={'Warning notification'}
        description={'Text'}
        status="warning"
        autoCloseDelay={10000}
      />
    </Space>
  );
};
```

### [ToastContainer](#toast/toast-container)

Toast Container is based on React and Styled Components. Example:

```ts
const Example = ({ ...args }) => {
  const toastArgs: ToastItemType = {
    title: 'Notification',
    description: 'Description text',
    colorful: false,
    autoClose: true,
  };

  return (
    <>
      <ToastContainer {...args} />
      <Space direction="row">
        <Button onClick={() => toast({ ...toastArgs, position: 'top-left' })}>top-left toast</Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'top-center' })}>
          top-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'top-right' })}>
          top-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'warning', position: 'bottom-left' })}>
          bottom-left toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'error', position: 'bottom-center' })}>
          bottom-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'bottom-right' })}>
          bottom-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'center-center' })}>
          center-center toast
        </Button>
      </Space>
    </>
  );
};
```

## [Typography](#typography)

### [Subtitle](#typography/subtitle)

Subtitle is based on React and Styled Components. Example:

```ts
const Example = ({ children, ...args }) => {
  return <Subtitle {...args}>{children}</Subtitle>;
};
```

### [Text](#typography/text)

Text is based on React and Styled Components. Example:

```ts
const Example = ({ children, ...args }) => {
  return <Text {...args}>{children}</Text>;
};
```

### [Title](#typography/title)

Title is based on React and Styled Components. Example:

```ts
const Example = ({ children, ...args }) => {
  return <Title {...args}>{children}</Title>;
};
```

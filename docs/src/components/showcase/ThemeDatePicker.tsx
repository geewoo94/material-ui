import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { iconButtonClasses } from '@mui/material/IconButton';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function ThemeDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Fade in timeout={700}>
        <Box
          sx={[
            {
              '& > div': {
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 1,
              },
              '& > div > div > div': {
                width: '100%',
              },
              [`& .${iconButtonClasses.root}`]: {
                color: 'primary.500',
              },
              '& .MuiPickerStaticWrapper-root': {
                bgcolor: '#fff',
              },
              '& .MuiPickerStaticWrapper-content': {
                bgcolor: 'initial',
              },
              '& .MuiYearCalendar-root': {
                width: '100%',
              },
              '& .MuiDateCalendar-root': {
                width: '100%',
                height: 'fit-content',
                '& .MuiPickersCalendarHeader-root': {
                  margin: '12px 0',
                  paddingLeft: '18px',
                },
                '& .MuiTypography-caption': {
                  color: 'grey.500',
                  height: 24,
                },
                '[role="presentation"]': {
                  '& .MuiIconButton-root': {
                    padding: 0,
                  },
                },
                '& .MuiPickersSlideTransition-root': {
                  minHeight: 165,
                },
                '& .MuiPickersYear-yearButton': {
                  flexBasis: '20%',
                  fontSize: '0.875rem',
                  height: 'auto',
                  width: 'auto',
                  padding: '8px 12px',
                  '&.Mui-selected': {
                    color: '#fff',
                    bgcolor: 'primary.main',
                  },
                },
                '& [role="row"]': {
                  justifyContent: 'space-around',
                },
                '& .MuiDateCalendar-viewTransitionContainer > div > div': {
                  justifyContent: 'space-around',
                },
                '& .MuiPickersDay-root': {
                  width: 24,
                  height: 24,
                  fontWeight: 500,
                  '&:not(:hover)': {
                    bgcolor: 'transparent',
                  },
                  '&.Mui-selected': {
                    color: '#fff',
                    bgcolor: 'primary.main',
                  },
                  '&.MuiPickersDay-today': {
                    '&:not(.Mui-selected)': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              },
            },
            (theme) =>
              theme.applyDarkStyles({
                '& > div': {
                  borderColor: 'primaryDark.700',
                },
                [`& .${iconButtonClasses.root}`]: {
                  color: 'primary.300',
                },
                '& .MuiPickerStaticWrapper-root': {
                  bgcolor: 'primaryDark.800',
                },
                '& .MuiDateCalendar-root': {
                  '& .MuiPickersDay-root': {
                    color: 'primary.100',
                  },
                },
              }),
          ]}
        >
          <StaticDatePicker displayStaticWrapperAs="desktop" />
        </Box>
      </Fade>
    </LocalizationProvider>
  );
}

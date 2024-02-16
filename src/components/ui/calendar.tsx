'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker, useNavigation } from 'react-day-picker';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { format } from 'date-fns';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <Sheet>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          'w-full border-t border-l border-r rounded-sm',
          className,
        )}
        classNames={{
          months:
            'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4 w-full',
          caption: 'flex px-4 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'flex items-center justify-center p-8 relative',
          nav_button: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border-none',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'space-y-1 w-full !mt-0',
          head_row: 'flex w-full border-t border-b bg-slate-200 gap-[1px]',
          head_cell:
            'text-muted-foreground font-normal text-[0.8rem] flex-1 bg-[#fff] text-left pl-4 py-3',
          row: 'flex w-full bg-slate-200 gap-[1px] border-b',
          cell: cn(
            'relative bg-[#fff] pl-2 flex-1 text-left text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md h-28',
            props.mode === 'range'
              ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              : '[&:has([aria-selected])]:rounded-md',
          ),
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
          ),
          day_range_start: 'day-range-start',
          day_range_end: 'day-range-end',
          day_selected:
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground',
          day_outside:
            'day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle:
            'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
          IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
          DayContent: ({ date }) => (
            <SheetTrigger>{date.getDate()}</SheetTrigger>
          ),
        }}
        {...props}
      />
    </Sheet>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

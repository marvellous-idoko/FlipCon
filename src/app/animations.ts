import { trigger,query,transition, style,group, animate, animateChild } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
  let typ = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],  { optional: true }),
    query(':enter', [
        style({ left: '-100%'})
      ]),
    group([
      query(':leave', [
        animate('300ms ease', style({ left: '100%'}))
      ],  { optional: true }),
      query(':enter', [
        animate('300ms ease', style({ left: '0%'}))
      ])
    ]),
  ];
  let de = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],  { optional: true }),
    query(':enter', [
        style({ right: '-100%'})
      ]),
    group([
      query(':leave', [
        animate('300ms ease', style({ right: '100%'}))
      ],  { optional: true }),
      query(':enter', [
        animate('300ms ease', style({ right: '0%'}))
      ])
    ]),
  ];
  export const slider =
  trigger('routeAnimations', [
    transition('* => login', de ),
    transition('* <=> home', typ ),
    transition('* => loan',de),
    transition('* => enrol',de),
    transition('* => register',de),
    transition('* => withdraw',de),
    transition('* => receipt',de),
    transition('* => loanstatus',de),
    transition('* => deposit',de),
    transition('* => loan-details',de),
    transition('* => profile',de)
  ]);

 
  export function slideTo(direction:string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
        style({ [direction]: '-100%'})
      ]),
    group([
      query(':leave', [
        animate('300ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('300ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}
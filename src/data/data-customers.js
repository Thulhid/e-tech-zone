import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const customers = [
  {
    created_at: fromToday(-10, true),
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    nationalId: '123456789V',
    nationality: 'American',
    countryFlag: 1.0,
  },
  {
    created_at: fromToday(-20, true),
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    nationalId: '987654321V',
    nationality: 'British',
    countryFlag: 2.0,
  },
  {
    created_at: fromToday(-5, true),
    fullName: 'Carlos Martinez',
    email: 'carlos.martinez@example.com',
    nationalId: '555666777V',
    nationality: 'Spanish',
    countryFlag: 3.0,
  },
  {
    created_at: fromToday(-15, true),
    fullName: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    nationalId: '444555666V',
    nationality: 'Pakistani',
    countryFlag: 4.0,
  },
  {
    created_at: fromToday(-30, true),
    fullName: 'Hiroshi Tanaka',
    email: 'hiroshi.tanaka@example.com',
    nationalId: '333222111V',
    nationality: 'Japanese',
    countryFlag: 5.0,
  },
];

const SORT_BY_OPTIONS = [
  {
    label: 'Default Sorting',
    value: '',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
  {
    label: 'By Name A-Z',
    value: 'AZ',
  },
  {
    label: 'By Name Z-A',
    value: 'ZA',
  },
];
const PAGE_SIZE_OPTIONS = [
  {
    label: 12,
    value: 12,
  },
  {
    label: 50,
    value: 50,
  },
  {
    label: 100,
    value: 100,
  },
  {
    label: 200,
    value: 200,
  },
];

const LAYOUT = {
  GRID: 'GRID',
  LIST: 'LIST',
};

export { SORT_BY_OPTIONS, PAGE_SIZE_OPTIONS, LAYOUT };

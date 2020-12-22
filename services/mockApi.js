const mockNamesListResponse = [
  { key: 1, value: "Devin" },
  { key: 2, value: "Dan" },
  { key: 3, value: "Dominic" },
  { key: 4, value: "Jackson" },
  { key: 5, value: "James" },
  { key: 6, value: "Joel" },
  { key: 7, value: "John" },
  { key: 8, value: "Jillian" },
  { key: 9, value: "Jimmy" },
  { key: 10, value: "Julie" },
];

export async function MockGetNamesList() {
  return new Promise((resolve) => {
    resolve(mockNamesListResponse);
  });
}

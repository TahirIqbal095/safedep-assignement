export interface LicenseData {
  id: string;
  name: string;
  url: string;
}

export const licensesData: LicenseData[] = [
  {
    id: "Apache-2.0",
    name: "Apache License 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    id: "BSD-3-Clause",
    name: 'BSD 3-Clause "New" or "Revised" License',
    url: "https://opensource.org/licenses/BSD-3-Clause",
  },
];

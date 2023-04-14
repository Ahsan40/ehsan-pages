import React from 'react'

const Telephone = (props) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="#000000ff">
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 62.06 18.07 C 99.94 11.03 138.96 10.13 177.13 15.37 C 192.88 17.47 208.38 21.00 223.98 23.98 C 228.66 24.92 233.54 25.65 237.67 28.21 C 243.42 31.59 247.52 37.41 249.07 43.87 C 251.41 53.23 253.73 62.60 256.00 71.98 L 256.00 74.42 C 254.56 79.86 252.40 85.10 250.31 90.32 C 248.29 95.48 242.29 98.30 236.98 96.97 C 222.98 94.35 208.98 91.69 194.99 89.05 C 190.27 88.44 185.98 84.98 184.96 80.24 C 183.48 73.56 182.69 66.74 181.16 60.06 C 179.05 60.03 176.95 60.01 174.85 59.98 C 174.84 69.89 174.84 79.79 174.85 89.70 C 180.19 89.39 186.58 90.56 189.05 95.96 C 193.39 105.75 197.11 115.81 201.28 125.68 C 202.23 128.09 203.46 130.43 203.84 133.02 C 203.58 134.49 202.51 135.62 201.79 136.88 C 199.99 136.39 197.49 136.48 196.78 134.34 C 191.90 123.03 187.56 111.49 182.75 100.15 C 181.27 96.13 176.28 97.59 173.01 97.31 C 140.92 97.37 108.84 97.31 76.75 97.34 C 74.79 97.67 73.52 99.12 72.89 100.91 C 61.33 129.38 49.77 157.86 38.19 186.32 C 36.86 189.74 34.90 193.11 35.07 196.90 C 35.15 208.64 35.01 220.37 35.14 232.10 C 34.84 234.79 37.37 236.79 39.92 236.51 C 72.95 236.60 106.00 236.47 139.03 236.57 C 141.52 236.15 142.63 238.62 143.84 240.26 C 142.62 241.87 141.53 244.28 139.10 243.95 C 106.73 244.08 74.35 243.93 41.98 244.03 C 38.89 244.01 35.55 243.97 32.92 242.13 C 29.49 240.00 27.53 236.00 27.62 232.00 C 27.55 220.00 27.62 208.01 27.59 196.02 C 27.49 191.48 29.69 187.42 31.31 183.33 C 42.88 154.86 54.45 126.40 66.00 97.92 C 67.09 95.27 68.77 92.74 71.35 91.35 C 74.29 89.58 77.86 89.88 81.15 89.70 C 81.16 79.79 81.15 69.89 81.15 59.98 C 79.05 60.01 76.94 60.03 74.84 60.06 C 73.30 66.73 72.53 73.55 71.03 80.23 C 70.08 84.57 66.37 88.02 62.02 88.81 C 47.93 91.60 33.80 94.17 19.69 96.88 C 16.31 97.58 12.56 97.38 9.70 95.27 C 6.93 93.50 5.57 90.38 4.49 87.42 C 2.98 83.25 1.30 79.15 0.00 74.91 L 0.00 72.12 C 2.20 62.68 4.60 53.27 6.93 43.85 C 8.45 37.40 12.58 31.62 18.30 28.23 C 23.03 25.31 28.67 24.73 34.00 23.60 C 37.65 22.95 41.25 21.87 44.96 21.66 C 46.68 21.74 47.56 23.45 48.65 24.52 C 48.07 25.87 47.89 27.64 46.52 28.47 C 37.78 31.68 27.34 30.44 19.68 36.37 C 17.14 38.76 15.18 41.78 14.34 45.19 C 12.32 52.98 10.49 60.81 8.54 68.61 C 10.12 68.32 11.70 68.04 13.27 67.75 C 31.40 64.25 49.55 60.91 67.66 57.36 C 69.86 54.33 73.19 52.11 77.08 52.44 C 78.35 52.43 79.62 52.42 80.90 52.43 C 80.89 48.22 83.19 43.37 87.88 42.98 C 93.19 42.71 98.59 42.47 103.88 43.18 C 108.07 44.16 109.65 48.61 109.79 52.47 C 110.66 52.47 112.41 52.47 113.28 52.47 C 123.10 52.47 132.91 52.46 142.73 52.47 C 143.60 52.47 145.35 52.47 146.22 52.47 C 146.33 48.60 147.93 44.15 152.13 43.17 C 157.40 42.47 162.79 42.72 168.09 42.98 C 172.79 43.35 175.09 48.21 175.11 52.43 C 176.38 52.42 177.65 52.43 178.92 52.44 C 182.82 52.11 186.13 54.36 188.36 57.37 C 208.06 61.14 227.77 64.81 247.46 68.62 C 245.51 60.81 243.67 52.97 241.66 45.18 C 240.15 38.95 234.92 33.87 228.62 32.60 C 218.44 30.42 208.20 28.56 198.00 26.48 C 155.90 18.02 112.27 17.23 69.92 24.31 C 66.95 24.77 64.01 25.56 61.00 25.58 C 59.58 25.00 58.61 23.72 57.45 22.77 C 58.30 20.63 59.32 18.07 62.06 18.07 M 88.69 50.34 C 88.61 63.50 88.67 76.65 88.66 89.80 C 114.89 89.80 141.11 89.80 167.34 89.80 C 167.34 88.57 167.34 87.34 167.35 86.10 C 167.33 74.19 167.36 62.27 167.33 50.36 C 162.87 50.31 158.42 50.35 153.97 50.35 C 153.54 57.70 154.88 65.24 153.02 72.44 C 150.94 74.02 148.88 76.07 146.04 75.88 C 134.01 75.97 121.96 75.98 109.93 75.88 C 105.77 75.97 102.01 72.29 102.10 68.11 C 101.95 62.19 102.12 56.27 102.03 50.35 C 97.58 50.31 93.13 50.36 88.69 50.34 M 109.55 60.00 C 109.54 62.79 109.55 65.59 109.57 68.38 C 121.86 68.41 134.15 68.42 146.44 68.38 C 146.45 65.59 146.46 62.79 146.45 60.00 C 134.15 60.00 121.85 60.00 109.55 60.00 M 8.37 76.34 C 10.01 80.21 11.10 84.32 13.01 88.08 C 14.25 90.15 16.92 89.77 18.92 89.37 C 32.29 86.79 45.68 84.32 59.06 81.77 C 60.86 81.46 63.17 80.85 63.61 78.77 C 64.76 74.34 65.27 69.78 66.16 65.30 C 46.91 69.04 27.61 72.53 8.37 76.34 M 189.87 65.35 C 190.76 69.83 191.29 74.39 192.40 78.82 C 192.86 80.89 195.17 81.46 196.96 81.78 C 210.38 84.26 223.78 86.84 237.18 89.39 C 239.16 89.79 241.79 90.12 242.99 88.06 C 244.95 84.32 246.05 80.19 247.64 76.28 C 228.38 72.68 209.15 68.88 189.87 65.35 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 103.49 113.68 C 115.87 107.96 130.29 106.74 143.43 110.42 C 156.20 113.85 167.64 121.86 175.38 132.56 C 183.19 143.26 187.23 156.68 186.50 169.92 C 185.74 185.20 178.69 200.07 167.29 210.29 C 157.42 219.31 144.38 224.76 131.03 225.43 C 115.42 226.29 99.60 220.49 88.19 209.81 C 75.41 198.06 68.22 180.37 69.58 163.02 C 69.66 160.75 72.12 159.29 74.23 159.64 C 76.33 160.60 77.31 162.71 76.96 164.96 C 76.40 178.77 81.72 192.68 91.44 202.52 C 105.74 217.59 129.68 222.36 148.56 213.61 C 162.32 207.69 173.06 195.30 177.10 180.89 C 181.08 167.17 178.91 151.81 171.22 139.76 C 162.66 125.98 147.21 116.74 130.98 115.94 C 110.51 114.41 89.76 126.71 81.66 145.62 C 80.77 148.16 78.87 150.50 75.88 150.06 C 74.28 149.00 72.75 147.05 73.68 145.05 C 79.06 131.27 90.01 119.77 103.49 113.68 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 124.41 124.61 C 130.82 122.14 138.49 127.10 138.97 133.91 C 139.89 140.58 133.59 146.92 126.92 146.03 C 120.65 145.58 115.75 139.04 117.18 132.89 C 117.88 129.10 120.78 125.86 124.41 124.61 M 126.22 131.98 C 124.01 133.24 123.88 136.79 126.17 138.02 C 128.31 139.56 131.70 137.66 131.53 135.03 C 131.66 132.40 128.41 130.59 126.22 131.98 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 98.17 140.17 C 104.72 138.59 111.66 144.23 111.44 150.97 C 111.64 157.38 105.37 162.91 99.04 161.93 C 93.02 161.32 88.35 155.14 89.52 149.18 C 90.18 144.76 93.81 141.04 98.17 140.17 M 98.18 148.29 C 96.52 149.53 96.51 152.44 98.19 153.66 C 100.25 155.69 104.09 153.78 103.93 150.97 C 104.09 148.14 100.23 146.24 98.18 148.29 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 153.16 140.23 C 159.77 138.50 166.89 144.19 166.62 151.02 C 166.78 157.14 161.08 162.51 154.99 162.02 C 148.97 161.83 143.88 156.01 144.60 150.00 C 144.94 145.34 148.61 141.22 153.16 140.23 M 153.39 148.27 C 151.42 149.73 151.81 153.21 154.10 154.17 C 156.58 155.53 159.91 152.82 159.01 150.11 C 158.52 147.71 155.20 146.57 153.39 148.27 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 205.08 145.02 C 206.91 145.53 209.43 145.51 210.13 147.70 C 215.64 160.69 220.73 173.87 226.17 186.90 C 227.59 190.06 228.57 193.45 228.43 196.95 C 228.31 208.96 228.56 220.97 228.31 232.97 C 228.25 238.84 222.98 243.96 217.13 243.93 C 197.39 244.09 177.65 243.97 157.92 243.99 C 155.27 244.45 153.82 242.17 152.60 240.27 C 153.78 238.78 154.68 236.37 156.98 236.59 C 176.66 236.42 196.34 236.62 216.01 236.52 C 218.14 236.72 219.93 235.48 220.84 233.59 C 220.86 220.44 221.12 207.25 220.72 194.11 C 215.42 179.48 208.98 165.25 203.39 150.72 C 202.20 148.59 204.01 146.71 205.08 145.02 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 124.41 154.57 C 131.54 152.25 139.76 157.51 140.70 164.92 C 142.01 171.98 136.34 179.26 129.18 179.71 C 122.37 180.53 115.68 174.95 115.21 168.13 C 114.51 162.16 118.63 156.14 124.41 154.57 M 125.27 162.26 C 121.77 164.14 121.83 169.78 125.38 171.58 C 128.68 173.65 133.48 170.92 133.39 167.02 C 133.65 162.98 128.67 160.04 125.27 162.26 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 96.40 172.56 C 101.94 170.24 108.93 173.41 110.79 179.13 C 113.02 184.81 109.48 191.78 103.62 193.40 C 97.98 195.28 91.35 191.65 89.81 185.94 C 88.12 180.64 91.21 174.49 96.40 172.56 M 99.47 179.45 C 97.93 179.87 96.77 181.39 97.03 183.02 C 96.80 186.15 101.33 187.53 103.13 185.08 C 105.40 182.64 102.60 178.38 99.47 179.45 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 151.46 172.61 C 157.06 170.18 164.16 173.41 166.01 179.21 C 168.18 184.93 164.58 191.94 158.65 193.45 C 153.05 195.23 146.58 191.63 145.02 186.01 C 143.29 180.73 146.33 174.61 151.46 172.61 M 154.52 179.47 C 151.61 180.26 151.23 184.87 154.08 185.98 C 156.15 187.22 159.15 185.37 159.12 182.98 C 159.33 180.61 156.71 178.71 154.52 179.47 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 125.21 188.10 C 132.38 185.91 140.16 192.71 138.95 200.11 C 138.35 206.77 130.88 211.60 124.56 209.26 C 118.91 207.52 115.48 200.86 117.53 195.27 C 118.69 191.80 121.66 188.99 125.21 188.10 M 126.48 195.58 C 122.17 197.44 125.77 204.36 129.74 201.79 C 133.71 199.87 130.32 193.50 126.48 195.58 Z"
        />
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 46.34 215.38 C 54.17 214.70 62.15 215.16 70.04 215.14 C 74.19 215.14 74.67 221.86 70.53 222.42 C 62.75 222.64 54.93 222.59 47.15 222.44 C 43.58 222.08 42.96 216.60 46.34 215.38 Z"
        />
      </g>
      <g id="#ffbf54ff">
        <path
          fill="#ffbf54"
          opacity="1.00"
          d=" M 69.92 24.31 C 112.27 17.23 155.90 18.02 198.00 26.48 C 208.20 28.56 218.44 30.42 228.62 32.60 C 234.92 33.87 240.15 38.95 241.66 45.18 C 243.67 52.97 245.51 60.81 247.46 68.62 C 227.77 64.81 208.06 61.14 188.36 57.37 C 186.13 54.36 182.82 52.11 178.92 52.44 C 178.42 48.42 179.25 43.12 175.38 40.51 C 171.65 38.38 167.12 39.26 163.02 39.07 C 157.69 39.38 152.13 38.32 146.97 39.94 C 142.04 42.04 142.87 48.12 142.73 52.47 C 132.91 52.46 123.10 52.47 113.28 52.47 C 113.19 49.70 113.32 46.89 112.71 44.17 C 111.98 41.22 108.99 39.32 106.06 39.23 C 100.38 38.86 94.69 39.20 89.01 39.05 C 85.79 39.18 81.89 38.76 79.51 41.41 C 76.89 44.43 77.52 48.76 77.08 52.44 C 73.19 52.11 69.86 54.33 67.66 57.36 C 49.55 60.91 31.40 64.25 13.27 67.75 C 13.72 57.01 18.44 47.02 19.68 36.37 C 27.34 30.44 37.78 31.68 46.52 28.47 C 47.89 27.64 48.07 25.87 48.65 24.52 C 51.59 23.95 54.52 23.36 57.45 22.77 C 58.61 23.72 59.58 25.00 61.00 25.58 C 64.01 25.56 66.95 24.77 69.92 24.31 Z"
        />
        <path
          fill="#ffbf54"
          opacity="1.00"
          d=" M 88.69 50.34 C 93.13 50.36 97.58 50.31 102.03 50.35 C 102.12 56.27 101.95 62.19 102.10 68.11 C 102.01 72.29 105.77 75.97 109.93 75.88 C 121.96 75.98 134.01 75.97 146.04 75.88 C 148.88 76.07 150.94 74.02 153.02 72.44 C 154.62 71.07 157.43 70.33 157.49 67.82 C 158.08 62.32 157.68 56.78 157.62 51.27 C 156.40 50.96 155.18 50.66 153.97 50.35 C 158.42 50.35 162.87 50.31 167.33 50.36 C 167.36 62.27 167.33 74.19 167.35 86.10 C 149.89 86.13 132.44 86.12 114.99 86.12 C 107.66 86.05 100.31 86.40 92.98 85.81 C 91.31 74.35 93.12 62.71 92.07 51.19 C 91.22 50.98 89.53 50.56 88.69 50.34 Z"
        />
        <path
          fill="#ffbf54"
          opacity="1.00"
          d=" M 76.75 97.34 C 108.84 97.31 140.92 97.37 173.01 97.31 C 176.28 97.59 181.27 96.13 182.75 100.15 C 187.56 111.49 191.90 123.03 196.78 134.34 C 197.49 136.48 199.99 136.39 201.79 136.88 C 202.86 139.60 203.96 142.31 205.08 145.02 C 204.01 146.71 202.20 148.59 203.39 150.72 C 208.98 165.25 215.42 179.48 220.72 194.11 C 221.12 207.25 220.86 220.44 220.84 233.59 C 218.24 233.19 215.63 232.84 213.01 232.77 C 160.01 232.82 107.02 232.77 54.03 232.80 C 49.16 232.89 44.29 232.88 39.43 232.51 C 38.32 226.05 38.93 219.50 38.83 212.99 C 38.88 207.98 38.64 202.96 38.83 197.95 C 38.93 192.75 41.55 188.14 43.37 183.41 C 52.78 159.81 62.28 136.24 71.68 112.63 C 73.63 107.63 76.27 102.78 76.75 97.34 M 103.49 113.68 C 90.01 119.77 79.06 131.27 73.68 145.05 C 72.75 147.05 74.28 149.00 75.88 150.06 C 74.81 153.03 74.15 156.12 73.63 159.23 L 74.23 159.64 C 72.12 159.29 69.66 160.75 69.58 163.02 C 68.22 180.37 75.41 198.06 88.19 209.81 C 99.60 220.49 115.42 226.29 131.03 225.43 C 144.38 224.76 157.42 219.31 167.29 210.29 C 178.69 200.07 185.74 185.20 186.50 169.92 C 187.23 156.68 183.19 143.26 175.38 132.56 C 167.64 121.86 156.20 113.85 143.43 110.42 C 130.29 106.74 115.87 107.96 103.49 113.68 M 46.34 215.38 C 42.96 216.60 43.58 222.08 47.15 222.44 C 54.93 222.59 62.75 222.64 70.53 222.42 C 74.67 221.86 74.19 215.14 70.04 215.14 C 62.15 215.16 54.17 214.70 46.34 215.38 Z"
        />
      </g>
      <g id="#ffa242ff">
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 14.34 45.19 C 15.18 41.78 17.14 38.76 19.68 36.37 C 18.44 47.02 13.72 57.01 13.27 67.75 C 11.70 68.04 10.12 68.32 8.54 68.61 C 10.49 60.81 12.32 52.98 14.34 45.19 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 79.51 41.41 C 81.89 38.76 85.79 39.18 89.01 39.05 C 94.69 39.20 100.38 38.86 106.06 39.23 C 108.99 39.32 111.98 41.22 112.71 44.17 C 113.32 46.89 113.19 49.70 113.28 52.47 C 112.41 52.47 110.66 52.47 109.79 52.47 C 109.65 48.61 108.07 44.16 103.88 43.18 C 98.59 42.47 93.19 42.71 87.88 42.98 C 83.19 43.37 80.89 48.22 80.90 52.43 C 79.62 52.42 78.35 52.43 77.08 52.44 C 77.52 48.76 76.89 44.43 79.51 41.41 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 146.97 39.94 C 152.13 38.32 157.69 39.38 163.02 39.07 C 167.12 39.26 171.65 38.38 175.38 40.51 C 179.25 43.12 178.42 48.42 178.92 52.44 C 177.65 52.43 176.38 52.42 175.11 52.43 C 175.09 48.21 172.79 43.35 168.09 42.98 C 162.79 42.72 157.40 42.47 152.13 43.17 C 147.93 44.15 146.33 48.60 146.22 52.47 C 145.35 52.47 143.60 52.47 142.73 52.47 C 142.87 48.12 142.04 42.04 146.97 39.94 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 88.69 50.34 C 89.53 50.56 91.22 50.98 92.07 51.19 C 93.12 62.71 91.31 74.35 92.98 85.81 C 100.31 86.40 107.66 86.05 114.99 86.12 C 132.44 86.12 149.89 86.13 167.35 86.10 C 167.34 87.34 167.34 88.57 167.34 89.80 C 141.11 89.80 114.89 89.80 88.66 89.80 C 88.67 76.65 88.61 63.50 88.69 50.34 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 153.97 50.35 C 155.18 50.66 156.40 50.96 157.62 51.27 C 157.68 56.78 158.08 62.32 157.49 67.82 C 157.43 70.33 154.62 71.07 153.02 72.44 C 154.88 65.24 153.54 57.70 153.97 50.35 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 8.37 76.34 C 27.61 72.53 46.91 69.04 66.16 65.30 C 65.27 69.78 64.76 74.34 63.61 78.77 C 63.17 80.85 60.86 81.46 59.06 81.77 C 45.68 84.32 32.29 86.79 18.92 89.37 C 16.92 89.77 14.25 90.15 13.01 88.08 C 11.10 84.32 10.01 80.21 8.37 76.34 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 189.87 65.35 C 209.15 68.88 228.38 72.68 247.64 76.28 C 246.05 80.19 244.95 84.32 242.99 88.06 C 241.79 90.12 239.16 89.79 237.18 89.39 C 223.78 86.84 210.38 84.26 196.96 81.78 C 195.17 81.46 192.86 80.89 192.40 78.82 C 191.29 74.39 190.76 69.83 189.87 65.35 Z"
        />
        <path
          fill="#ffa242"
          opacity="1.00"
          d=" M 72.89 100.91 C 73.52 99.12 74.79 97.67 76.75 97.34 C 76.27 102.78 73.63 107.63 71.68 112.63 C 62.28 136.24 52.78 159.81 43.37 183.41 C 41.55 188.14 38.93 192.75 38.83 197.95 C 38.64 202.96 38.88 207.98 38.83 212.99 C 38.93 219.50 38.32 226.05 39.43 232.51 C 44.29 232.88 49.16 232.89 54.03 232.80 C 107.02 232.77 160.01 232.82 213.01 232.77 C 215.63 232.84 218.24 233.19 220.84 233.59 C 219.93 235.48 218.14 236.72 216.01 236.52 C 196.34 236.62 176.66 236.42 156.98 236.59 C 154.68 236.37 153.78 238.78 152.60 240.27 C 149.68 240.27 146.76 240.26 143.84 240.26 C 142.63 238.62 141.52 236.15 139.03 236.57 C 106.00 236.47 72.95 236.60 39.92 236.51 C 37.37 236.79 34.84 234.79 35.14 232.10 C 35.01 220.37 35.15 208.64 35.07 196.90 C 34.90 193.11 36.86 189.74 38.19 186.32 C 49.77 157.86 61.33 129.38 72.89 100.91 Z"
        />
      </g>
      <g id="#f7f3f1ff">
        <path
          fill="#f7f3f1"
          opacity="1.00"
          d=" M 81.66 145.62 C 89.76 126.71 110.51 114.41 130.98 115.94 C 147.21 116.74 162.66 125.98 171.22 139.76 C 178.91 151.81 181.08 167.17 177.10 180.89 C 173.06 195.30 162.32 207.69 148.56 213.61 C 139.32 214.06 129.84 215.09 120.84 212.26 C 101.25 207.08 85.44 190.08 81.71 170.16 C 79.95 162.07 80.98 153.77 81.66 145.62 M 124.41 124.61 C 120.78 125.86 117.88 129.10 117.18 132.89 C 115.75 139.04 120.65 145.58 126.92 146.03 C 133.59 146.92 139.89 140.58 138.97 133.91 C 138.49 127.10 130.82 122.14 124.41 124.61 M 98.17 140.17 C 93.81 141.04 90.18 144.76 89.52 149.18 C 88.35 155.14 93.02 161.32 99.04 161.93 C 105.37 162.91 111.64 157.38 111.44 150.97 C 111.66 144.23 104.72 138.59 98.17 140.17 M 153.16 140.23 C 148.61 141.22 144.94 145.34 144.60 150.00 C 143.88 156.01 148.97 161.83 154.99 162.02 C 161.08 162.51 166.78 157.14 166.62 151.02 C 166.89 144.19 159.77 138.50 153.16 140.23 M 124.41 154.57 C 118.63 156.14 114.51 162.16 115.21 168.13 C 115.68 174.95 122.37 180.53 129.18 179.71 C 136.34 179.26 142.01 171.98 140.70 164.92 C 139.76 157.51 131.54 152.25 124.41 154.57 M 96.40 172.56 C 91.21 174.49 88.12 180.64 89.81 185.94 C 91.35 191.65 97.98 195.28 103.62 193.40 C 109.48 191.78 113.02 184.81 110.79 179.13 C 108.93 173.41 101.94 170.24 96.40 172.56 M 151.46 172.61 C 146.33 174.61 143.29 180.73 145.02 186.01 C 146.58 191.63 153.05 195.23 158.65 193.45 C 164.58 191.94 168.18 184.93 166.01 179.21 C 164.16 173.41 157.06 170.18 151.46 172.61 M 125.21 188.10 C 121.66 188.99 118.69 191.80 117.53 195.27 C 115.48 200.86 118.91 207.52 124.56 209.26 C 130.88 211.60 138.35 206.77 138.95 200.11 C 140.16 192.71 132.38 185.91 125.21 188.10 Z"
        />
      </g>
      <g id="#e9e1deff">
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 126.22 131.98 C 128.41 130.59 131.66 132.40 131.53 135.03 C 131.70 137.66 128.31 139.56 126.17 138.02 C 123.88 136.79 124.01 133.24 126.22 131.98 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 75.88 150.06 C 78.87 150.50 80.77 148.16 81.66 145.62 C 80.98 153.77 79.95 162.07 81.71 170.16 C 85.44 190.08 101.25 207.08 120.84 212.26 C 129.84 215.09 139.32 214.06 148.56 213.61 C 129.68 222.36 105.74 217.59 91.44 202.52 C 81.72 192.68 76.40 178.77 76.96 164.96 C 77.31 162.71 76.33 160.60 74.23 159.64 L 73.63 159.23 C 74.15 156.12 74.81 153.03 75.88 150.06 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 98.18 148.29 C 100.23 146.24 104.09 148.14 103.93 150.97 C 104.09 153.78 100.25 155.69 98.19 153.66 C 96.51 152.44 96.52 149.53 98.18 148.29 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 153.39 148.27 C 155.20 146.57 158.52 147.71 159.01 150.11 C 159.91 152.82 156.58 155.53 154.10 154.17 C 151.81 153.21 151.42 149.73 153.39 148.27 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 125.27 162.26 C 128.67 160.04 133.65 162.98 133.39 167.02 C 133.48 170.92 128.68 173.65 125.38 171.58 C 121.83 169.78 121.77 164.14 125.27 162.26 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 99.47 179.45 C 102.60 178.38 105.40 182.64 103.13 185.08 C 101.33 187.53 96.80 186.15 97.03 183.02 C 96.77 181.39 97.93 179.87 99.47 179.45 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 154.52 179.47 C 156.71 178.71 159.33 180.61 159.12 182.98 C 159.15 185.37 156.15 187.22 154.08 185.98 C 151.23 184.87 151.61 180.26 154.52 179.47 Z"
        />
        <path
          fill="#e9e1de"
          opacity="1.00"
          d=" M 126.48 195.58 C 130.32 193.50 133.71 199.87 129.74 201.79 C 125.77 204.36 122.17 197.44 126.48 195.58 Z"
        />
      </g>
    </svg>
  )
}

export default Telephone
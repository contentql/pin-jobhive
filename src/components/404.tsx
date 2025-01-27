'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from './common/Button'

const PageNotFound: React.FC = () => {
  const pathname = usePathname()

  // const { mutate: runSeedMutation, isPending } = trpc.seed.runSeed.useMutation({
  //   onSuccess: () => {
  //     window.location.reload()
  //   },
  // })

  // if (pathname === '/') {
  //   return (
  //     <section className='flex min-h-screen flex-col items-center justify-center'>
  //       <h1 className='text-4xl font-semibold'>Welcome to ⚡Bolt Theme</h1>

  //       <p className='my-4 p-2 text-center'>
  //         {isPending
  //           ? '⏰please hold-on this process might take some time'
  //           : 'Click below👇 to instantly load demo content-blogs, authors, tags, and pages'}
  //       </p>

  //       <Button
  //         isLoading={isPending}
  //         disabled={isPending}
  //         onClick={() => {
  //           runSeedMutation()
  //         }}>
  //         Load Demo Data
  //       </Button>
  //     </section>
  //   )
  // }

  return (
    <section className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-semibold'>404</h1>
      <div className='aspect-video max-h-96'>
        <svg
          className='h-full w-full'
          viewBox='0 0 708 521'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M267.048 514.571C384.697 547.656 441.942 420.693 542.745 430.352C597.925 435.64 707.912 462.44 707.667 267.219C707.051 141.184 590.883 109.625 471.089 174.259C435.839 188.045 408.008 183.773 377.791 170.076C347.575 156.379 308.712 95.2299 235.468 82.6502C15.0519 44.7943 -173.542 390.671 267.048 514.571Z'
            fill='#A978DE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M546.627 197.49C548.835 196.417 552.795 198.498 550.497 201.847C545.411 209.264 565.084 224.078 558.769 211.023C558.094 209.627 554.63 199.974 559.53 204.959C564.43 209.942 571.261 231.964 566.843 239.552C562.965 246.211 552.704 249.379 538.698 249.754L538.067 249.768L537.769 249.786C529.512 250.17 523.251 245.06 519.209 235.108L519.016 234.623C514.925 224.206 516.047 215.856 522.663 210.226C522.783 210.124 522.911 210.032 523.047 209.951L523.254 209.839L546.627 197.49Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M100.556 2.54246C99.5924 1.17679 98.0325 0.389504 96.3647 0.592782C94.6587 0.800553 93.2313 1.98765 92.7113 3.62511L92.5731 4.06312C92.4676 4.38544 92.3429 4.75607 92.1958 5.17273C91.778 6.36096 91.2692 7.68058 90.6695 9.09904C88.9647 13.1332 86.8656 17.1594 84.3611 20.9038C78.9557 28.9855 72.4418 34.6111 64.8071 36.7775C63.6144 37.1156 62.9214 38.3577 63.2595 39.5515C63.4313 40.1569 74.5824 45.7296 85.9649 44.3247C97.006 42.9624 108.292 34.638 108.383 34.072L108.522 32.8916L108.561 32.4963C109.352 23.9204 107.851 14.2327 102.076 4.84816C101.596 4.06874 101.09 3.30054 100.556 2.54246Z'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M123.532 5.03809L123.474 5.49181C122.673 11.2982 120.432 19.3833 116.378 25.4828C111.388 32.9917 104.345 38.7341 97.2675 42.4358C87.0564 47.7738 75.9435 48.7509 65.0001 41.8158L64.5172 41.5047C58.767 37.7435 54.4027 35.9331 48.4155 37.4268C42.4272 38.9216 39.5195 43.2826 36.9349 47.329L36.8164 47.4998C36.4021 48.0534 35.7959 48.4364 35.1129 48.5712L23.7603 50.3692L27.8944 55.5051C29.1387 57.0628 30.0233 58.1848 30.5479 58.8721L35.0919 64.8582C48.6345 82.6209 63.2088 99.5795 91.6296 93.7092L92.5932 93.5025C100.122 91.828 106.435 96.3237 114.355 102.949L116.048 104.374C118.142 106.147 124.477 111.73 127.069 114.419L127.915 115.307L128.697 116.148C128.86 116.326 129.015 116.497 129.162 116.659L129.971 117.57L130.467 116.985C135.828 110.531 139.186 100.7 140.924 92.5917C141.58 89.5279 141.957 86.5944 142.115 83.8878L142.134 83.5351C142.174 82.7434 142.192 82.0526 142.196 81.4765V81.0475L141.386 81.2856C132.012 83.9439 121.466 84.2078 111.175 83.0207C108.689 82.7332 135.959 60.6466 130.362 32.0427C129.086 25.5243 128.276 16.808 126.048 10.8916C125.345 9.02504 124.617 7.31907 123.895 5.79392L123.532 5.03809Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M547.813 201.023L524.481 212.365C518.889 217.123 517.938 224.201 521.628 233.597C522.923 236.894 526.162 244.747 526.162 241.663C526.162 240.699 547.813 226.547 551.966 227.932C555.807 229.212 548.908 217.671 546.973 212.365L547.813 200.733L548.455 199.574'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M516.684 209.534C518.234 209.534 509.448 213.667 509.901 221.288C510.354 228.909 516.309 242.955 514.861 243.509C513.413 244.062 510.667 239.968 510.113 238.519C506.669 229.506 506.016 225.829 506.14 220.572C506.302 213.691 509.92 209.534 516.684 209.534Z'
            fill='#E7EAEE'
          />
          <path
            d='M555.785 230.784C559.134 230.784 561.849 224.65 561.849 217.084C561.849 209.517 559.134 203.383 555.785 203.383C552.435 203.383 549.72 209.517 549.72 217.084C549.72 224.65 552.435 230.784 555.785 230.784Z'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M132.16 361.538C132.16 337.766 134.801 327.43 163.165 314.456C221.296 290.96 221.296 290.054 332.661 246.998C362.113 235.669 424.203 262.805 451.203 251.433C469.203 243.852 486.035 238.222 500.906 230.703C502.346 240.107 511.655 256.028 514.935 258.765C497.52 262.419 480.675 268.07 464.398 275.72C429.213 292.254 450.063 287.748 394.332 340.304C389.609 344.758 372.253 354.913 347.158 365.492C347.158 365.492 296.619 358.705 276.349 350.274C255.721 341.693 224.464 314.456 224.464 314.456C224.464 314.456 188.007 338.24 167.049 348.93C157.24 353.934 132.16 361.538 132.16 361.538Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M132.159 349.185C132.159 343.605 131.569 339.71 132.159 335.403C134.081 321.36 141.613 314.176 163.319 304.247C221.45 280.751 221.295 277.7 332.66 234.644C362.111 223.316 424.202 250.452 451.202 239.08C469.201 231.499 486.034 225.869 500.905 218.35C500.948 218.619 499.4 231.47 499.4 231.47C499.4 231.47 462.688 250.856 438.403 254.967C412.601 259.334 377.161 239.08 341.773 249.041C287.882 264.212 163.695 311.894 149.003 323.843C137.46 333.232 132.159 349.185 132.159 349.185Z'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M100.556 2.54246C99.5924 1.17679 98.0325 0.389504 96.3647 0.592782C94.6587 0.800553 93.2313 1.98765 92.7113 3.62511L92.5731 4.06312C92.4676 4.38544 92.3429 4.75607 92.1958 5.17273C91.778 6.36096 91.2692 7.68058 90.6695 9.09904C88.9647 13.1332 86.8656 17.1594 84.3611 20.9038C78.9557 28.9855 72.4418 34.6111 64.8071 36.7775C63.6144 37.1156 62.9214 38.3577 63.2595 39.5515C63.5986 40.7443 82.1487 32.2908 88.0943 23.4016C90.7717 19.4 92.9988 15.1278 94.8081 10.8488C95.3539 9.55727 95.829 8.34096 96.2355 7.219L96.4332 6.66531C96.5927 6.21383 96.7297 5.80839 96.8454 5.45013C96.8746 5.19519 96.9027 5.10984 96.9274 5.19407C109.796 13.9968 104.737 35.8442 105.973 35.9509C107.153 36.052 108.198 35.222 108.383 34.072L108.522 32.8916L108.561 32.4963C109.352 23.9204 107.851 14.2327 102.076 4.84816C101.596 4.06874 101.09 3.30054 100.556 2.54246Z'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M127.349 2.4775L127.632 2.984L127.978 3.63315C128.187 4.03297 128.421 4.49681 128.676 5.02129C129.559 6.83732 130.449 8.89256 131.303 11.159C133.706 17.5381 135.385 24.4226 135.959 31.5958C136.737 41.3296 135.332 50.5153 131.773 58.8722L131.469 59.5741C128.578 66.1026 124.367 72.0842 118.899 77.4503L118.357 77.9748L118.817 77.9972C126.691 78.3285 134.478 77.6232 141.322 75.4411C142.79 74.9728 144.39 75.2142 145.655 76.0936C146.917 76.9718 147.701 78.3847 147.78 79.92L147.798 80.3961L147.809 81.0262V81.2688C147.809 82.147 147.783 83.1331 147.72 84.2124C147.548 87.1942 147.135 90.4107 146.415 93.7687C144.381 103.255 140.316 112.14 133.67 119.627C132.787 120.621 131.548 121.216 130.228 121.287L129.924 121.293C128.515 121.268 127.228 120.685 126.314 119.691L125.645 118.912L125.317 118.54L124.619 117.766L123.856 116.94C123.589 116.658 123.313 116.368 123.027 116.071C120.587 113.541 117.894 111.033 115.034 108.725C107.107 102.328 99.4598 98.7159 92.9291 99.1079C82.2474 99.7492 73.4009 99.2505 65.1934 96.9471C54.5836 93.9709 46.2514 88.1297 40.7381 78.8306L40.4291 78.3005C37.5746 73.3229 33.3588 67.5885 28.3859 61.6204C26.849 59.7752 25.3332 58.0209 23.8883 56.3991L23.2736 55.7118C22.2893 54.6168 21.4828 53.7442 21.1448 53.3893C19.8968 52.0741 19.4631 50.1874 20.0083 48.4623L20.0884 48.2287C20.6873 46.6171 22.0803 45.4221 23.7781 45.0863L32.8821 43.2871L32.9882 43.1344C36.2458 38.5039 40.8969 34.5821 47.0757 33.0019C53.52 31.3543 60.3012 32.7874 67.1307 37.1202L67.6069 37.4268C76.8308 43.4601 85.9727 43.1265 94.6654 38.5825C100.874 35.3357 106.792 29.8224 111.276 23.076C115.446 16.8025 117.923 10.0965 118.101 4.80341C118.174 2.59205 119.7 0.692912 121.845 0.151584C123.993 -0.39199 126.239 0.559263 127.349 2.4775ZM123.532 5.03813L123.474 5.49186C122.674 11.2982 120.432 19.3833 116.379 25.4828C111.388 32.9918 104.345 38.7341 97.2676 42.4358C87.0576 47.7738 75.9435 48.7509 65.0002 41.8159L64.5173 41.5048C58.767 37.7435 54.4027 35.9331 48.4156 37.4268C42.4284 38.9217 39.5197 43.2826 36.935 47.3291L36.8165 47.4998C36.4022 48.0535 35.7962 48.4365 35.113 48.5712L23.7604 50.3693L27.8946 55.5052C29.139 57.0629 30.0234 58.1849 30.548 58.8722L35.0922 64.8594C48.6346 82.621 63.2089 99.5796 91.6297 93.7092L92.5933 93.5026C100.122 91.828 106.435 96.3238 114.355 102.949L116.048 104.374C118.142 106.147 124.477 111.73 127.069 114.419L127.916 115.307L128.697 116.148C128.86 116.326 129.015 116.497 129.163 116.659L129.971 117.57L130.467 116.985C135.828 110.531 139.186 100.7 140.924 92.5917C141.581 89.528 141.957 86.5945 142.115 83.8878L142.134 83.5352C142.174 82.7434 142.192 82.0527 142.196 81.4765V81.0475L141.386 81.2856C132.013 83.944 121.466 84.2079 111.175 83.0208C108.689 82.7344 135.959 60.6467 130.362 32.0428C129.086 25.5244 128.276 16.8081 126.048 10.8917C125.346 9.02509 124.617 7.31912 123.895 5.79397L123.532 5.03813Z'
            fill='#E7EAEE'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M52.3463 55.5926C54.5139 55.5926 56.2771 53.8293 56.2771 51.6618C56.2771 49.4942 54.5139 47.731 52.3463 47.731C50.1788 47.731 48.4155 49.4942 48.4155 51.6618C48.4155 53.8293 50.1788 55.5926 52.3463 55.5926Z'
            fill='#09090B'
          />
          <path
            d='M55.7156 71.3158C59.127 71.3158 61.8925 69.0531 61.8925 66.2619C61.8925 63.4707 59.127 61.208 55.7156 61.208C52.3041 61.208 49.5386 63.4707 49.5386 66.2619C49.5386 69.0531 52.3041 71.3158 55.7156 71.3158Z'
            fill='#FFB61D'
          />
          <path
            d='M55.7156 71.3158C59.127 71.3158 61.8925 69.0531 61.8925 66.2619C61.8925 63.4707 59.127 61.208 55.7156 61.208C52.3041 61.208 49.5386 63.4707 49.5386 66.2619C49.5386 69.0531 52.3041 71.3158 55.7156 71.3158Z'
            fill='#FFB61D'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M127.351 2.4775L127.634 2.984L127.979 3.63315C128.187 4.03297 128.422 4.49681 128.677 5.02129C129.56 6.83732 130.45 8.89256 131.304 11.159C133.707 17.5381 135.386 24.4226 135.96 31.5958C136.738 41.3296 135.333 50.5153 131.774 58.8722L131.47 59.5741C128.579 66.1026 124.368 72.0842 118.899 77.4503L118.358 77.9748L118.818 77.9972C126.692 78.3285 134.478 77.6232 141.323 75.4411C142.791 74.9728 144.391 75.2142 145.656 76.0936C146.918 76.9718 147.702 78.3847 147.781 79.92L147.799 80.3961L147.81 81.0262V81.2688C147.81 82.147 147.784 83.1331 147.721 84.2124C147.548 87.1942 147.135 90.4107 146.416 93.7687C144.382 103.255 140.317 112.14 133.671 119.627C132.789 120.621 131.547 121.216 130.229 121.287L129.925 121.293C128.515 121.268 127.229 120.685 126.315 119.691L125.646 118.912L125.318 118.54L124.62 117.766L123.855 116.94C123.59 116.658 123.314 116.368 123.028 116.071C120.587 113.541 117.895 111.033 115.035 108.725C107.107 102.328 99.4609 98.7159 92.9301 99.1079C82.2473 99.7492 73.4019 99.2505 65.1944 96.9471C54.5835 93.9709 46.2524 88.1297 40.739 78.8306L40.4299 78.3005C37.5754 73.3229 33.3596 67.5885 28.3867 61.6204C26.8498 59.7752 25.334 58.0209 23.8892 56.3991L23.2744 55.7118C22.2901 54.6168 21.4836 53.7442 21.1457 53.3893C19.8976 52.0741 19.4639 50.1874 20.0091 48.4623L20.0892 48.2287C20.6881 46.6171 22.0812 45.4221 23.779 45.0863L32.883 43.2871L32.9891 43.1344C36.2466 38.5039 40.8978 34.5821 47.0756 33.0019C53.1571 31.4464 59.5396 32.6358 65.9783 36.4161C73.1099 34.025 79.2341 28.5702 84.361 20.9051C86.8666 17.1596 88.9656 13.1333 90.6705 9.10033C91.2702 7.68075 91.7779 6.36226 92.1968 5.17291C92.3439 4.75736 92.4686 4.38674 92.5741 4.06329L92.7123 3.62529C93.2311 1.98782 94.6586 0.800725 96.3657 0.594077C98.0323 0.389675 99.5934 1.17696 100.556 2.54376C101.09 3.30072 101.597 4.07003 102.077 4.84945C106.559 12.1338 108.467 19.6012 108.726 26.5891C109.618 25.4626 110.471 24.289 111.277 23.076C115.446 16.8025 117.924 10.0965 118.101 4.80341C118.175 2.59205 119.701 0.692912 121.846 0.151584C123.994 -0.39199 126.24 0.559263 127.351 2.4775ZM94.6664 38.5825C86.2231 42.9962 77.3552 43.4376 68.4008 37.93C74.4295 35.1425 84.1027 29.3709 88.0953 23.4028C90.7716 19.4013 92.9998 15.1279 94.8079 10.849C95.3538 9.55856 95.8288 8.34226 96.2365 7.21917L96.4342 6.66661C96.5925 6.214 96.7296 5.80857 96.8464 5.45142C96.8755 5.19536 96.9025 5.11001 96.9283 5.19424C105.482 11.0466 106.114 22.6616 105.94 29.8235C102.502 33.4927 98.6444 36.5025 94.6664 38.5825ZM97.2686 42.4358C100.694 40.6434 104.113 38.3736 107.294 35.6557C107.538 35.5142 107.755 35.3255 107.93 35.1032C111.075 32.3303 113.967 29.1126 116.379 25.4828C120.433 19.3833 122.674 11.2982 123.475 5.49186L123.533 5.03813L123.896 5.79397C124.618 7.31912 125.346 9.02509 126.049 10.8917C127.6 15.0089 128.463 20.4817 129.275 25.6266V25.6277C129.629 27.875 129.974 30.0605 130.363 32.0428C134.653 53.9665 119.635 72.0617 113.505 79.4471C111.637 81.6978 110.595 82.9534 111.176 83.0208C121.467 84.2079 132.012 83.944 141.387 81.2856L142.197 81.0475V81.4765C142.193 82.0527 142.175 82.7434 142.135 83.5352L142.116 83.8878C141.959 86.5945 141.581 89.528 140.925 92.5917C139.187 100.7 135.829 110.531 130.468 116.985L129.972 117.57L129.163 116.659C129.016 116.497 128.861 116.326 128.698 116.148L127.917 115.307L127.07 114.419C124.478 111.73 118.143 106.147 116.049 104.374L114.356 102.949C106.436 96.3238 100.124 91.828 92.5944 93.5026L91.6307 93.7092C63.2099 99.5796 48.6356 82.621 35.093 64.8594L30.549 58.8722C30.0242 58.1849 29.1398 57.0629 27.8955 55.5052L23.7612 50.3693L35.1139 48.5712C35.797 48.4365 36.4031 48.0535 36.8175 47.4998L36.9358 47.3291C39.5206 43.2826 42.4283 38.9217 48.4166 37.4268C54.4038 35.9331 58.7681 37.7435 64.5183 41.5048L65.0012 41.8159C75.9446 48.7509 87.0575 47.7738 97.2686 42.4358ZM546.627 197.49C548.835 196.417 552.795 198.498 550.497 201.848C547.02 206.919 550.883 218.693 553.237 225.864V225.865V225.866C554.326 229.183 555.092 231.514 554.657 231.742C553.282 232.46 551.586 231.929 550.868 230.554C546.978 223.112 544.745 217.203 544.188 212.71C543.911 210.475 543.85 208.313 544.006 206.227L544.027 205.986L526.046 214.726L525.818 214.935C521.76 218.742 519.974 223.163 522.944 230.993L523.12 231.448C526.344 239.658 531.802 245.546 537.482 245.301L537.925 245.279C550.545 245.025 558.088 241.228 560.78 236.603C564.165 230.789 565.084 224.079 558.769 211.023C558.094 209.629 554.63 199.976 559.53 204.959C564.43 209.942 571.261 231.965 566.843 239.552C563.154 245.886 553.69 249.062 540.719 249.679C540.795 250.009 540.812 250.36 540.76 250.715C539.531 259.052 535.725 264.297 529.362 265.814C524.495 266.975 519.265 265.438 514.474 261.734C497.642 265.348 481.35 270.857 465.594 278.262L463.26 279.367C455.221 283.207 450.612 285.781 447.246 288.283C445.272 289.75 443.641 291.253 441.888 293.187L441.605 293.51C440.754 294.496 438.9 296.759 436.792 299.335L436.788 299.34L436.786 299.343L436.785 299.344L436.783 299.346L436.777 299.354L436.773 299.359C433.967 302.785 430.714 306.759 428.771 309.008L427.832 310.09C419.925 319.15 409.958 329.429 396.26 342.348L395.876 342.7C390.74 347.289 377.092 355.048 360.073 362.873C407.042 361.204 440.911 343.277 462.002 309.061C462.93 307.555 465.002 307.272 466.3 308.474C502.568 342.063 544.591 357.608 592.531 355.181C640.598 352.746 675.872 340.253 698.46 317.823C699.56 316.731 701.338 316.737 702.43 317.838C703.523 318.938 703.517 320.715 702.417 321.808C678.721 345.338 628.412 362.994 579.076 365.492C531.097 367.921 502.468 348.152 465.863 315.659L464.97 314.86L464.649 315.352C441.466 350.485 391.098 376.111 340.835 376.473L339.259 376.479C287.847 376.479 258.197 351.585 223.511 317.56L223.241 317.293L223.117 317.399L222.211 318.161L220.894 319.269L220.087 319.948C187.586 347.299 163.335 367.708 126.855 372.921L125.692 373.084C84.5609 381.405 22.1797 359.238 12.5935 348.373C3.81016 338.417 14.0551 344.606 16.8676 346.305H16.8678C17.1248 346.46 17.3197 346.578 17.4323 346.642C44.6554 362.228 76.0434 368.164 113.703 363.028C118.899 362.318 124.064 361.38 129.196 360.212L129.136 359.658C127.492 344.042 127.482 337.216 129.852 329.381C133.074 318.725 140.898 310.628 154.973 304.19L158.849 302.476C176.234 294.815 190.041 289.062 204.363 283.473L205.412 283.064C207.018 282.439 208.645 281.811 210.306 281.174L211.934 280.553C212.521 280.345 220.175 277.31 231.812 272.697L231.817 272.696L231.847 272.683L231.853 272.681L231.855 272.68C258.756 262.015 306.888 242.934 338.288 230.793C345.08 228.181 353.304 227.313 363.392 227.834L364.261 227.882C371.818 228.327 379.251 229.352 391.435 231.46L402.142 233.336C414.096 235.405 419.889 236.221 426.652 236.703C428.778 236.854 430.798 237.042 432.718 237.221H432.719C439.83 237.881 445.554 238.413 450.114 236.493C454.171 234.785 458.147 233.135 462.043 231.519H462.044C474.788 226.232 486.674 221.302 497.705 215.818C498.462 210.912 500.395 207.29 503.424 204.905C508.096 201.226 514.71 201.164 520.447 203.394C521.892 203.957 522.607 205.584 522.046 207.029C521.864 207.497 520.696 207.281 519.043 206.977C515.586 206.339 510.01 205.31 506.898 209.316C503.436 213.774 502.286 220.601 505.352 234.045C507.574 243.787 521.976 260.353 528.059 260.353C534.841 260.353 536.427 253.768 537.327 250.034L537.383 249.8C529.317 250.009 523.188 244.905 519.21 235.109L519.016 234.624C514.924 224.206 516.046 215.856 522.662 210.226C522.783 210.124 522.912 210.032 523.047 209.952L523.255 209.84L546.627 197.49ZM509.293 256.658C509.009 256.314 508.728 255.962 508.451 255.601C508.344 255.489 508.244 255.375 508.157 255.27C507.901 254.959 507.639 254.643 507.371 254.322C505.195 251.708 502.674 248.679 500.699 244.313L500.413 243.676C497.246 236.582 496.869 228.612 497.063 222.041L497.092 221.278L496.925 221.363C483.84 227.838 469.606 234.335 454.223 240.853L452.294 241.668C445.707 244.442 437.482 246.402 427.059 245.728L426.253 245.673C419.132 245.165 413.142 244.314 400.583 242.134L391.206 240.49C364.772 235.913 351.544 235.199 340.645 239.275C340.645 239.275 178.097 300.421 157.279 309.309C144.618 315.101 140.322 320.551 135.086 329.381C132.377 333.949 132.651 346.549 132.842 355.3V355.302C132.874 356.769 132.903 358.128 132.917 359.323C163.651 351.636 193.195 335.656 221.567 311.349C222.686 310.391 224.355 310.459 225.39 311.506C227.686 313.828 230.02 316.069 232.392 318.232L349.444 269.33C349.766 269.195 350.097 269.125 350.425 269.113C351.306 268.697 352.258 268.354 353.277 268.082C363.484 265.369 371.635 269.783 377.267 280.65L387.47 273.208C388.975 272.11 391.112 272.755 391.758 274.501C401.068 299.664 398.356 316.906 383.025 325.226C367.563 333.615 354.117 326.697 343.635 305.728C343.103 304.664 343.312 303.434 344.048 302.606C341.549 292.454 341.085 284.366 342.786 278.509L240.232 324.984C255.567 337.434 272.405 346.824 290.76 353.157C291.18 352.755 291.635 352.409 292.082 352.165C307.542 343.696 345.633 333.804 355.042 331.36C355.856 331.149 356.455 330.993 356.806 330.898C361.221 329.716 356.698 333.841 355.365 334.456L355.196 334.528L299.601 355.937C316.139 360.648 333.848 363.002 352.736 363.002C353.811 363.002 354.878 362.994 355.939 362.977L357.182 362.169H357.184L357.185 362.167L357.187 362.166C369.076 354.438 388.956 341.517 392.407 338.263L394.017 336.74C405.464 325.632 413.982 314.978 421.42 305.676C429.578 295.471 436.433 286.897 444.422 281.145C450.632 276.672 452.883 275.65 458.174 273.249C459.589 272.607 461.221 271.866 463.205 270.933C477.237 264.339 493.172 260.521 508.131 256.936L509.293 256.658ZM354.721 273.509C362.808 271.359 368.866 275.157 373.483 285.763L361.553 295.22L361.541 295.225L349.215 300.089L348.907 298.735C345.531 283.435 347.73 275.367 354.721 273.509ZM373.483 285.763L361.564 295.217C361.803 295.122 362.049 295.063 362.295 295.036C362.52 295.012 362.746 295.016 362.966 295.046C363.49 295.116 363.987 295.334 364.396 295.675C364.664 295.9 364.893 296.176 365.066 296.498C367.88 301.565 370.055 302.771 372.263 301.532C374.601 300.221 375.336 295.292 373.628 286.486L373.483 285.763ZM218.832 401.049C220.137 400.209 229.137 395.817 221.122 404.072C213.106 412.326 150.68 447.344 116.983 449.283C84.5047 451.152 55.6684 437.588 30.5789 419.836L29.7475 419.243L29.5818 419.456C28.4711 420.864 27.3299 422.143 26.1571 423.289L25.6526 423.773C23.5275 425.768 19.8495 428.026 14.5355 430.651C13.1453 431.337 8.23266 431.97 10.7747 429.376C13.3168 426.784 18.8805 423.052 22.1207 420.912C24.2383 419.513 24.9071 417.878 25.5706 416.255C25.9224 415.395 26.2727 414.538 26.8366 413.722C27.7424 412.412 29.5556 412.117 30.8302 413.071C55.5639 431.609 84.4565 441.491 116.983 439.619C149.644 437.739 183.376 423.862 218.832 401.049ZM410.934 418.95C412.073 417.898 412.073 410.396 410.934 411.447C398.319 423.088 371.907 433.327 339.316 435.203C306.684 437.081 281.028 431.95 262.298 419.906C260.994 419.067 254.538 416.849 258.418 420.75C262.298 424.649 305.912 444.996 339.639 443.054L340.648 442.995C373.88 440.967 397.309 431.523 410.934 418.95ZM387.898 280.472L387.729 279.968L379.276 286.136L379.431 287.007C381.131 296.95 379.971 303.448 375.257 306.287L375.01 306.431C370.096 309.186 365.47 307.239 361.602 301.577L361.432 301.325L350.065 305.917L350.328 306.394C359.016 322.072 368.647 326.433 379.98 320.485L380.346 320.29C391.727 314.114 394.532 301.51 388.292 281.694L387.898 280.472ZM56.2782 51.662C56.2782 53.8295 54.515 55.5928 52.3474 55.5928C50.1798 55.5928 48.4166 53.8295 48.4166 51.662C48.4166 49.4944 50.1798 47.7312 52.3474 47.7312C54.515 47.7312 56.2782 49.4944 56.2782 51.662Z'
            fill='#09090B'
          />
        </svg>
      </div>

      <p className='my-4 p-2'>Looks like your lost!</p>

      <Link href='/'>
        <Button variant='outline'>
          <ArrowLeft size={16} />
          Back to home
        </Button>
      </Link>
    </section>
  )
}

export default PageNotFound

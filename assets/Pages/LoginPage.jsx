import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div class="rounded-2xl border border-neutral bg-neutral-bg dark:border-dark-neutral-border dark:bg-dark-neutral-bg flex-1 self-stretch">
            <div class="flex items-center justify-between px-6 py-[18px]">
              <p class="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">Best Sellers</p>
              <div class="dropdown dropdown-end ml-auto translate-x-4">
                <label class="cursor-pointer dropdown-label flex items-center justify-between py-2 px-4" tabindex="0"><img class="cursor-pointer" src="assets/images/icons/icon-toggle.svg" alt="toggle icon">
                </label>
                <ul class="dropdown-content" tabindex="0">
                  <div class="relative menu rounded-box dropdown-shadow min-w-[126px] bg-neutral-bg mt-[10px] pt-[14px] pb-[7px] px-4 border border-neutral-border  dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
                    <div class="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-transparent right-[18px]"></div>
                    <li class="text-normal mb-[7px]"><a class="flex items-center bg-transparent p-0 gap-[7px]" href="#"> <span class="text-gray-500 text-[11px] leading-4 hover:text-gray-700">Sales report</span></a>
                    </li>
                    <li class="text-normal mb-[7px]"><a class="flex items-center bg-transparent p-0 gap-[7px]" href="#"> <span class="text-gray-500 text-[11px] leading-4 hover:text-gray-700">Export report</span></a>
                    </li>
                    <li class="text-normal mb-[7px]"><a class="flex items-center bg-transparent p-0 gap-[7px]" href="#"> <span class="text-gray-500 text-[11px] leading-4 hover:text-gray-700">Profit manage</span></a>
                    </li>
                    <li class="text-normal mb-[7px]"><a class="flex items-center bg-transparent p-0 gap-[7px]" href="#"> <span class="text-gray-500 text-[11px] leading-4 hover:text-gray-700">Revenue report</span></a>
                    </li>
                    <div class="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"></div>
                    <li class="text-normal mb-[7px]"><a class="flex items-center bg-transparent p-0 gap-[7px]" href="#remove"> <span class="text-red text-[11px] leading-4">Remove widget</span></a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border"></div>
            <div class="pt-5 flex flex-col gap-5 px-[26px] pb-[22px]">
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-1.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Esther Howard</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">Louis Vuitton</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$778.35</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">1258 sales</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-2.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Wade Warren</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">Binford Ltd.</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$576.28</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">1028 sales</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-3.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Cameron Williamson</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">MasterCard</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$446.61</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">985 sales</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-4.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Jenny Wilson</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">Pizza Hut</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$406.27</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">875 sales</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-5.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Leslie Alexander</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">Apple</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$396.84</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">630 sales</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-lg"><img class="w-full h-full object-cover" src="assets/images/seller-avatar-6.png" alt="seller avatar"></div>
                  <div>
                    <p class="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-4">Kristin Watson</p>
                    <p class="text-desc text-gray-400 dark:text-gray-dark-400">Starbucks</p>
                  </div>
                </div>
                <div>
                  <p class="text-normal font-semibold text-gray-1100 mb-4 dark:text-gray-dark-1100">$351.02</p>
                  <p class="text-desc text-gray-400 dark:text-gray-dark-400">563 sales</p>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default LoginPage
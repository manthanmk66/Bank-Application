// FinancialOverview.js
import React from "react";

function HeroSection() {
  return (
    <div
      className="w-full "
    >
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3 animate-fadeIn">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Your Financial Overview
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get a comprehensive view of your financial health and manage your
              accounts and investments all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fadeInUp">
            <a
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              View Accounts
            </a>
            <a
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100  focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 bg-gray-950 text-gray-50 hover:text-gray-800"
            >
              Manage Investments
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeInUp">
            <div className="bg-gray-100  rounded-lg p-6 shadow-sm transition-transform hover:scale-105">
              <h3 className="text-lg font-bold">Total Assets</h3>
              <p className="text-4xl font-bold text-gray-900  my-4">$250,000</p>
              <p className="text-gray-500 dark:text-gray-400">
                Your total assets, including cash, investments, and real estate.
              </p>
            </div>
            <div className="bg-gray-100  rounded-lg p-6 shadow-sm transition-transform hover:scale-105">
              <h3 className="text-lg font-bold">Net Worth</h3>
              <p className="text-4xl font-bold text-gray-900  my-4">$175,000</p>
              <p className="text-gray-500 dark:text-gray-400">
                Your net worth, calculated as your total assets minus your total
                liabilities.
              </p>
            </div>
            <div className="bg-gray-100  rounded-lg p-6 shadow-sm transition-transform hover:scale-105">
              <h3 className="text-lg font-bold">Retirement Savings</h3>
              <p className="text-4xl font-bold text-gray-900  my-4">$125,000</p>
              <p className="text-gray-500 ">
                The total amount you have saved for your retirement, including
                401(k) and IRA accounts.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm transition-transform hover:scale-105">
              <h3 className="text-lg font-bold">Debt</h3>
              <p className="text-4xl font-bold text-gray-900  my-4">$75,000</p>
              <p className="text-gray-500 dark:text-gray-400">
                The total amount of debt you have, including credit cards,
                loans, and mortgages.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex align-items justify-center">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3 animate-fadeIn">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Credit Card Offers
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse our selection of credit card offers and find the best fit
              for your financial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp  items-center justify-center">
            {/* Credit Card Offers */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Chase Sapphire Preferred
                </h3>
                <p className="text-sm text-muted-foreground">
                  Earn 60,000 bonus points after you spend $4,000 on purchases
                  in the first 3 months.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Annual Fee
                    </p>
                    <p className="font-bold">$95</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Rewards Rate
                    </p>
                    <p className="font-bold">2X</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-950 text-gray-50">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Capital One Quicksilver
                </h3>
                <p className="text-sm text-muted-foreground">
                  Earn a $200 cash bonus after you spend $500 on purchases
                  within 3 months from account opening.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Annual Fee
                    </p>
                    <p className="font-bold">$0</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Rewards Rate
                    </p>
                    <p className="font-bold">1.5%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2  bg-gray-950 text-gray-50">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Amex Blue Cash Preferred
                </h3>
                <p className="text-sm text-muted-foreground">
                  Earn 6% cash back at U.S. supermarkets (up to $6,000 per year
                  in purchases) and 6% on select U.S. streaming subscriptions.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Annual Fee
                    </p>
                    <p className="font-bold">$95</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Rewards Rate
                    </p>
                    <p className="font-bold">6%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-950 text-gray-50">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

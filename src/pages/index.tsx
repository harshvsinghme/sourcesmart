import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Chart, { ChartConfiguration, TooltipItem } from 'chart.js/auto';
import {
  BarChart,
  Boxes,
  FileText,
  LayoutDashboard,
  LineChart,
  Package,
  Search,
  Users
} from 'lucide-react';
import { Kanit, Noto_Sans_Cuneiform, Nunito_Sans } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/*Typography Start */
const notoSansFont = Noto_Sans_Cuneiform({
  weight: '400',
  subsets: []
});
const nunitoSansFont = Nunito_Sans({
  subsets: []
});
const kanitFont = Kanit({
  weight: '400',
  subsets: []
});
/* Typography End*/

const Home = () => {
  const [showCTA, setShowCTA] = useState(true);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Clean up previous instance
    }

    if (chartRef.current) {
      const config: ChartConfiguration<'line'> = {
        type: 'line',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          datasets: [
            {
              label: 'Procurement Efficiency (%)',
              data: [20, 22, 25, 30, 35, 35, 37, 39, 42, 50, 55, 60],
              borderColor: '#4F46E5',
              backgroundColor: 'rgba(79, 70, 229, 0.2)',
              borderWidth: 2,
              pointRadius: 4,
              tension: 0.4 // Smooth curve
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#4B5563'
              }
            },
            tooltip: {
              callbacks: {
                label: (context: TooltipItem<'line'>) => `Efficiency: ${context.raw}%`
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#4B5563'
              },
              grid: {
                display: false
              }
            },
            y: {
              ticks: {
                callback: (value) => `${value}%`,
                color: '#4B5563'
              },
              grid: {
                color: 'rgba(75, 85, 99, 0.2)'
              }
            }
          }
        }
      };

      chartInstance.current = new Chart(chartRef.current, config);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          SourceSmart | Future Of Supply Chains | AI Driven Procurement to Optimize Your Supply
          Chain
        </title>
      </Head>
      <div>
        {/* Hero-Section 1*/}
        <div className="landing-page-hero-1 flex flex-col px-8 justify-center items-center text-center min-h-screen">
          <h1
            className="mt-[35vw] md:mt-0 text-4xl md:text-5xl font-bold animate-fade-in text-white"
            style={{ ...notoSansFont.style }}
          >
            Transform Your{' '}
            <span className="text-[--theme-color-1] font-semibold">Procurement Process</span> with{' '}
            <span className="text-[--theme-color-1] font-semibold">AI</span>
          </h1>
          <p className="mt-4 text-lg text-white" style={{ ...nunitoSansFont.style }}>
            AI-powered procurement helps businesses{' '}
            <span className="underline font-bold">optimize</span> their supply chain and{' '}
            <span className="underline font-bold">reduce costs</span> by
            <span className="text-2xl text-[--theme-color-1]"> 30%</span>
          </p>
          <Button className="mt-6 px-10 py-5 w-fit text-lg bg-[--theme-color-1] hover:bg-[--theme-color-1] text-black hover:scale-105 transform transition">
            Join the Waitlist
          </Button>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mt-[10vh] flex justify-center">
          <Image
            src="https://www.thesunflowerlab.com/wp-content/uploads/2024/03/Vendor-Dashboard.webp"
            alt="AI Procurement Dashboard"
            className="mt-8 w-full md:w-[65vw]"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        {/* Feature Highlights */}
        <div className="mt-[10vh] py-20 px-6 md:px-12 lg:px-24 bg-indigo-600">
          <h2
            className="text-xl md:text-3xl font-bold text-center text-white"
            style={{ ...notoSansFont.style }}
          >
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Supplier Discovery',
                text: 'Find the right suppliers with AI-driven insights',
                icon: Search
              },
              {
                title: 'Predictive Analytics',
                text: 'Optimize procurement with data-backed predictions',
                icon: BarChart
              },
              {
                title: 'Inventory Optimization',
                text: 'Minimize costs & maximize efficiency with AI',
                icon: Package
              }
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-white hover:shadow-md">
                <CardContent className="flex flex-col items-center text-center">
                  <feature.icon className="w-8 h-8 my-4 text-[--theme-color-2]" />
                  <h3
                    className="text-md md:text-xl font-semibold"
                    style={{ ...notoSansFont.style }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-md" style={{ ...nunitoSansFont.style }}>
                    {feature.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chart div */}
        <div className="py-20 text-center">
          <h2 className="text-xl md:text-3xl font-bold" style={{ ...kanitFont.style }}>
            See What You Can Achieve
          </h2>
          <div className="max-w-4xl mx-2 md:mx-auto mt-8" style={{ height: '400px' }}>
            <canvas ref={chartRef}></canvas>
          </div>
          <Button className="mt-6 px-10 py-5 w-fit text-lg bg-[--theme-color-1] hover:bg-[--theme-color-1] text-black hover:scale-105 transform transition">
            Join the Waitlist
          </Button>
        </div>

        {/* All Features div */}
        <div className="mt-8 px-6 md:px-12 lg:px-24">
          <h2 className="text-xl md:text-3xl font-bold text-center" style={{ ...kanitFont.style }}>
            Comprehensive Tools to Optimize Your Supply Chain
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: 'Dashboard Overview',
                text: 'Gain real-time insights into your procurement processes with a unified dashboard.',
                icon: LayoutDashboard
              },
              {
                title: 'Supplier Discovery Module',
                text: 'Find the right suppliers with AI-driven insights and data-backed recommendations.',
                icon: Users
              },
              {
                title: 'RFQ Management',
                text: 'Streamline the Request for Quotation (RFQ) process for better cost efficiency.',
                icon: FileText
              },
              {
                title: 'Predictive Market Analysis',
                text: 'Leverage AI to anticipate market trends and optimize procurement strategies.',
                icon: LineChart
              },
              {
                title: 'Inventory Optimization',
                text: 'Reduce storage costs and improve supply chain efficiency with smart inventory management.',
                icon: Boxes
              }
            ].map((feature, idx) => (
              <Card key={idx} className="shadow-md hover:shadow-xl transition">
                <CardContent className="flex flex-col items-center text-center">
                  <feature.icon className="w-6 h-6 my-3 text-[--theme-color-2]" />
                  <h3
                    className="text-md font-bold"
                    style={{ ...notoSansFont.style, fontWeight: '600' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-md"
                    style={{ ...nunitoSansFont.style, fontWeight: '400' }}
                  >
                    {feature.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dismissible Final CTA */}
        {showCTA ? (
          <div
            className="mt-20 md:mt-28 py-16 text-center bg-indigo-600 text-white relative"
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              width: '100%',
              overflow: 'hidden'
            }}
          >
            <h2 className="text-3xl font-bold" style={{ ...kanitFont.style }}>
              Revolutionize Procurement Today
            </h2>
            <Button className="mt-6 px-10 py-5 w-fit text-lg bg-[--theme-color-1] hover:bg-[--theme-color-1] text-black hover:scale-105 transform transition">
              Join the Waitlist
            </Button>
            <button
              onClick={() => setShowCTA(false)}
              className="absolute top-4 right-4 bg-white text-indigo-600 px-3 py-1 rounded-full transition"
            >
              ✕
            </button>
          </div>
        ) : null}
        {showCTA ? null : <div className="mt-8"></div>}
      </div>
    </>
  );
};

export default Home;

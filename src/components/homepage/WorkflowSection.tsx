import FadeUp from '../FadeUp'
import SlideIn from '../SlideIn'
import LazyVideo from '../LazyVideo'
import { MessageSquare, FileText, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Brain Dump™',
    body: 'Have a natural conversation about your business, offer, and audience. Voice or text, our AI asks the strategic questions that matter. In 15 minutes, you\'ll extract what took you years to learn.',
    videoSrc: '/Brain_Dump.mp4',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Strategic Blueprint',
    body: 'Your Brain Dump becomes a comprehensive strategic blueprint: core transformation, Big Domino statement, audience pain points, unique mechanism, and offer architecture. This is your shared DNA.',
    videoSrc: '/Strategic_Blueprint.mp4',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch Your Ecosystem',
    body: 'One click generates your entire marketing ecosystem: funnel pages, webinar scripts, emails, ads, and hooks. Every piece speaks with one voice because they all share one strategic foundation.',
    videoSrc: '/Funnel_Stack.mp4',
  },
]

export default function WorkflowSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">How It Works</p>
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-[#818cf8]/30 mb-4">
              <span className="text-xl"><span className="font-black text-white">funnel</span><span className="font-light text-[#818cf8]">studio</span></span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Go from stuck to launched in 3 simple steps.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              No more blank pages. No more disconnected tools. One clear path.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-20 lg:gap-28">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-14`}
              >
                {/* Text */}
                <SlideIn from={isEven ? 'right' : 'left'} delay={0.1}>
                  <div className="flex-1 max-w-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
                        <Icon size={20} className="text-green" />
                      </div>
                      <span className="text-xs font-bold text-green/60 uppercase tracking-wider">
                        Step {step.num}
                      </span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-base">{step.body}</p>
                  </div>
                </SlideIn>

                {/* Video */}
                <SlideIn from={isEven ? 'left' : 'right'} delay={0.2}>
                  <div className="flex-1 w-full max-w-xl">
                    <div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/[0.08] bg-[#111]">
                      <LazyVideo
                        src={step.videoSrc}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </SlideIn>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, GraduationCap, MapPin, Star, Trophy, Users } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { submitToGoogleForm } from "./actions"
import { useState } from "react"

export default function LandingPage() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-40 w-full bg-transparent">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-[#42ffff]" />
            <span className="text-2xl font-bold text-white">MathRank</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-white hover:text-[#42ffff] transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-[#42ffff] transition-colors">
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-[#42ffff] transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-[#42ffff] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold px-6 text-base">Contact Us</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Student studying"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative container px-4 md:px-6 pt-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none text-white mb-6">
                Be a <span className="text-[#42ffff]">champion</span>
                <br />
                of education
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl mb-8">
                Change lives and make learning accessible for all. Join MathRank's proven tutoring program to excel in
                mathematics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold text-base">
                  Start Your Journey
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Tutoring Services</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive math tutoring for students of all ages and skill levels
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 bg-gray-800">
                <div className="rounded-full bg-[#42ffff]/20 p-4">
                  <Calculator className="h-6 w-6 text-[#42ffff]" />
                </div>
                <h3 className="text-xl font-bold">Elementary Math</h3>
                <p className="text-center text-gray-300">
                  Building strong foundations in arithmetic, fractions, and basic problem-solving skills.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 bg-gray-800">
                <div className="rounded-full bg-[#42ffff]/20 p-4">
                  <Users className="h-6 w-6 text-[#42ffff]" />
                </div>
                <h3 className="text-xl font-bold">Middle & High School</h3>
                <p className="text-center text-gray-300">
                  Algebra, Geometry, Trigonometry, Pre-Calculus, and AP Math preparation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 bg-gray-800">
                <div className="rounded-full bg-[#42ffff]/20 p-4">
                  <Trophy className="h-6 w-6 text-[#42ffff]" />
                </div>
                <h3 className="text-xl font-bold">College & Advanced</h3>
                <p className="text-center text-gray-300">
                  Calculus, Statistics, Linear Algebra, and specialized math courses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#000000] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ace Your AP Math Classes
                </h2>
                <p className="text-xl text-gray-300">
                  Give your child the edge they need to succeed. Our specialized AP Math tutoring has helped countless
                  students achieve a perfect 5 on their AP exams.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#42ffff] mr-2" />
                    Tailored AP Calculus AB/BC preparation
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#42ffff] mr-2" />
                    AP Statistics mastery programs
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#42ffff] mr-2" />
                    Expert tutors with proven AP success records
                  </li>
                </ul>
                <Button className="bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold text-base">
                  Boost AP Scores Now
                </Button>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Student celebrating AP exam success"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose MathRank?</h2>
                <p className="text-gray-600 md:text-xl">
                  At MathRank, we're dedicated to helping students excel in mathematics through personalized tutoring
                  and proven teaching methods.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#42ffff] mt-0.5" />
                    <div>
                      <h3 className="font-bold">Experienced Tutors</h3>
                      <p className="text-gray-600">
                        All our tutors are certified with advanced degrees in mathematics or related fields.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#42ffff] mt-0.5" />
                    <div>
                      <h3 className="font-bold">Personalized Approach</h3>
                      <p className="text-gray-600">
                        Customized learning plans tailored to each student's unique needs and learning style.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#42ffff] mt-0.5" />
                    <div>
                      <h3 className="font-bold">Proven Results</h3>
                      <p className="text-gray-600">
                        Our students consistently improve their grades and develop stronger math skills.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Tutoring session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Student success"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=300" alt="Group study" fill className="object-cover" />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="One-on-one tutoring"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Serving Las Vegas & Henderson</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Convenient locations to serve students throughout the Las Vegas Valley
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 bg-gray-800">
                <div className="rounded-full bg-[#42ffff]/20 p-4">
                  <MapPin className="h-6 w-6 text-[#42ffff]" />
                </div>
                <h3 className="text-xl font-bold">Las Vegas</h3>
                <p className="text-center text-gray-300">
                  Serving students throughout Las Vegas with in-person and online tutoring options.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 bg-gray-800">
                <div className="rounded-full bg-[#42ffff]/20 p-4">
                  <MapPin className="h-6 w-6 text-[#42ffff]" />
                </div>
                <h3 className="text-xl font-bold">Henderson</h3>
                <p className="text-center text-gray-300">
                  Convenient tutoring locations for Henderson residents with flexible scheduling.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#000000] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Excel in Math?</h2>
                <p className="text-gray-300 md:text-xl">
                  Contact us today to schedule a free consultation and learn how MathRank can help you achieve your
                  academic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="border-[#42ffff] text-[#42ffff] hover:bg-[#42ffff]/10">
                    View Pricing
                  </Button>
                </div>
              </div>
              <form
                action={async (formData) => {
                  const result = await submitToGoogleForm(formData)
                  setFormStatus(result)
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    className="bg-gray-800 border-gray-700"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Preferred Contact Method</label>
                  <RadioGroup defaultValue="email" name="contactMethod" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-info" className="text-sm font-medium leading-none">
                    Contact Information
                  </label>
                  <Input
                    id="contact-info"
                    name="contactInfo"
                    className="bg-gray-800 border-gray-700"
                    placeholder="Enter email or phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="bg-gray-800 border-gray-700"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold">
                  Send Message
                </Button>
                {formStatus && (
                  <div
                    className={`mt-4 p-2 rounded ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Success stories from our students and parents
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="space-y-2">
                  <div className="flex text-[#42ffff]">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "My son was struggling with Algebra, but after just a few sessions with MathRank, his confidence and
                    grades improved dramatically!"
                  </p>
                </div>
                <div>
                  <p className="font-bold">Sarah P.</p>
                  <p className="text-sm text-gray-500">Parent of high school student</p>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="space-y-2">
                  <div className="flex text-[#42ffff]">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "The tutors at MathRank helped me prepare for my Calculus AP exam. I got a 5 and couldn't have done
                    it without them!"
                  </p>
                </div>
                <div>
                  <p className="font-bold">Michael T.</p>
                  <p className="text-sm text-gray-500">AP Calculus student</p>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="space-y-2">
                  <div className="flex text-[#42ffff]">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "As a college student struggling with Statistics, MathRank's tutoring was a lifesaver. They explain
                    complex concepts in a way that's easy to understand."
                  </p>
                </div>
                <div>
                  <p className="font-bold">Jessica L.</p>
                  <p className="text-sm text-gray-500">College student</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
          <Button className="bg-[#42ffff] text-black hover:bg-[#42ffff]/80 font-bold rounded-full h-14 w-14 md:h-auto md:w-auto md:rounded-md md:px-6 md:py-3 shadow-lg flex items-center justify-center">
            <span className="hidden md:inline">Contact</span>
            <GraduationCap className="h-6 w-6 md:hidden" />
          </Button>
        </div>
      </main>
      <footer className="w-full border-t bg-gray-900 text-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-[#42ffff]" />
            <span className="font-bold">MathRank</span>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} MathRank Tutoring. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-[#42ffff]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-[#42ffff]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


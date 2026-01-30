"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  user_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  user_phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  move_date: z.date({
    message: "A move date is required.",
  }),
  move_time: z.string().min(1, {
    message: "Please select a preferred time.",
  }),
  home_size: z.enum(["Studio", "1 Bedroom", "2 Bedroom", "3+ Bedroom"], {
    message: "Please select a home size.",
  }),
  move_type: z.enum(["Full Pack", "DIY Pack", "Hybrid"], {
    message: "Please select a move type.",
  }),
  message: z.string().optional(),
})

export function ScheduleForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      if (!serviceId || !templateId || !publicKey) {
        // Mock Mode
        console.log("Mock Submission:", values)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } else {
        // EmailJS Submission
        await emailjs.send(
          serviceId,
          templateId,
          {
            user_name: values.user_name,
            user_email: values.user_email,
            user_phone: values.user_phone,
            move_date: format(values.move_date, "PPP"),
            move_time: values.move_time,
            home_size: values.home_size,
            move_type: values.move_type,
            message: values.message,
          },
          publicKey
        )
      }

      toast.success("Move Scheduled! We will call you to confirm your 20% price beat.")
      
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("There was an error. Please call (774) 722-5923.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="user_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 555-5555" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Move Details</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="move_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Move Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="move_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Requested</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Morning (8am - 11am)">Morning (8am - 11am)</SelectItem>
                      <SelectItem value="Midday (11am - 2pm)">Midday (11am - 2pm)</SelectItem>
                      <SelectItem value="Afternoon (2pm - 5pm)">Afternoon (2pm - 5pm)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="home_size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Home Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select home size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Studio">Studio</SelectItem>
                    <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                    <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                    <SelectItem value="3+ Bedroom">3+ Bedroom</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="move_type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Move Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Full Pack" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Let us pack for you
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="DIY Pack" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        You pack first
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Hybrid" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Hybrid
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific instructions or questions?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[tomato] hover:bg-[#ff5733] text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Book Your Move"
          )}
        </Button>
      </form>
    </Form>
  )
}

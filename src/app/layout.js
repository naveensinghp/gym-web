import { Geist, Geist_Mono,Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Fredoka({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrackLift - Track Your Workout Progress",
  description: "TrackLift is your ultimate workout companion, designed to help you track your progress, set goals, and stay motivated on your fitness journey. With an intuitive interface and powerful features, TrackLift makes it easy to log your workouts, monitor your performance, and achieve your fitness goals. Whether you're a beginner or a seasoned athlete, TrackLift is the perfect tool to keep you on track and motivated every step of the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

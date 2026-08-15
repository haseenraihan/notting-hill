import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type DetailFact = { label: string; value: string };
export type DetailSection = { heading: string; items: string[] };

export type DetailContent = {
  /** Short label shown above the title */
  eyebrow?: string;
  title: string;
  /** Emoji or short glyph rendered beside the title */
  glyph?: string;
  intro: string;
  facts?: DetailFact[];
  sections?: DetailSection[];
  /** Pre-fills the destination field on the enquiry page */
  enquirySubject: string;
};

type DetailDialogProps = {
  content: DetailContent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

const DetailDialog = ({ content, open, onOpenChange }: DetailDialogProps) => {
  if (!content) return null;

  const enquiryHref = `/contact?destination=${encodeURIComponent(content.enquirySubject)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] sm:w-full max-h-[85vh] overflow-y-auto p-0 gap-0 rounded-2xl border-border/60">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/15 to-transparent pointer-events-none" />
          <DialogHeader className="relative px-6 pt-8 pb-4 sm:px-8 text-left space-y-3">
            {content.eyebrow && (
              <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase">
                {content.eyebrow}
              </span>
            )}
            <DialogTitle className="font-heading text-2xl sm:text-3xl text-foreground flex items-center gap-3 pr-8">
              {content.glyph && <span className="text-3xl leading-none">{content.glyph}</span>}
              {content.title}
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              {content.intro}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 sm:px-8 pb-8 space-y-8">
          {content.facts && content.facts.length > 0 && (
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {content.facts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={itemVariants}
                  className="rounded-xl border border-border/70 bg-secondary/40 p-3"
                >
                  <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground mb-1">
                    {fact.label}
                  </div>
                  <div className="font-heading text-sm text-foreground">{fact.value}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {content.sections?.map((section) => (
            <motion.div
              key={section.heading}
              variants={listVariants}
              initial="hidden"
              animate="show"
            >
              <h4 className="font-heading text-lg text-foreground mb-3">{section.heading}</h4>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="pt-2 border-t border-border/60">
            <p className="font-body text-sm text-muted-foreground mt-6 mb-4">
              Ready to move forward with {content.title}? Send us an enquiry and a specialist
              will reply within one working day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                <Link to={enquiryHref} onClick={() => onOpenChange(false)}>
                  Send an Enquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href={`https://wa.me/447385608114?text=${encodeURIComponent(
                    `Hello Notting Hill Voyages, I'd like information about ${content.enquirySubject}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;

import {BlockTestForm, TestForm} from "@/app/test-form";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-dvh grid">
      <div className="grid place-items-center">
       <Card>
         <CardHeader>
           <CardTitle className="font-bold">Test Form</CardTitle>
         </CardHeader>

         <CardContent>
           <BlockTestForm/>
         </CardContent>
       </Card>
      </div>
    </main>
  );
}

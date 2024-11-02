import Breadcrumbs from "@/app/ui/breadcrumbs";

export default function testBreadcrumbs(){
    return(
        <div className="min-h-screen">
            <Breadcrumbs breadcrumbs={[{label: 'main', href:'/'}, {label: 'test', href:'test/breadcrumbs', isActive: true}]}/>
        </div>
    )
}
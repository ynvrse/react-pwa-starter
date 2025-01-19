import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dashboard</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>React Progresive Web App Starter</CardTitle>
                    <CardDescription>
                        React + VitePWA + TypeScript template for building apps with shadcn/ui.
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    );
}

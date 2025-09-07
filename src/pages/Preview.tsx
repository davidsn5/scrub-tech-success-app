import React from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useFeatureFlags } from '@/contexts/FeatureFlagsContext';
import { FlagGate } from '@/components/FlagGate';
import { Eye, Settings, Zap } from 'lucide-react';

const Preview: React.FC = () => {
  const { flags, toggleFlag, isAdmin } = useFeatureFlags();

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center">
        <Card className="p-6">
          <h1 className="text-xl font-bold text-center">Access Denied</h1>
          <p className="text-muted-foreground text-center mt-2">This area is for administrators only.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Eye className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Preview Area</h1>
            <Badge variant="secondary">Admin Only</Badge>
          </div>
          <p className="text-muted-foreground">
            Test new features before they go live. Feature flags control what users see.
          </p>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Feature Flags</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(flags).map(([key, enabled]) => (
              <div key={key} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <Label htmlFor={key} className="text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {getFeatureDescription(key)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={enabled ? "default" : "secondary"} className="text-xs">
                    {enabled ? "ON" : "OFF"}
                  </Badge>
                  <Switch
                    id={key}
                    checked={enabled}
                    onCheckedChange={() => toggleFlag(key as keyof typeof flags)}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Feature Previews</h2>
          </div>
          
          <div className="space-y-4">
            <FlagGate flag="newExamUI">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <h3 className="font-medium text-primary">🎯 New Exam UI</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Enhanced exam interface with improved navigation and progress tracking.
                </p>
              </div>
            </FlagGate>

            <FlagGate flag="chartsV2">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <h3 className="font-medium text-primary">📊 Charts V2</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  New analytics dashboard with interactive charts and detailed insights.
                </p>
              </div>
            </FlagGate>

            <FlagGate flag="enhancedProgress">
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <h3 className="font-medium text-primary">📈 Enhanced Progress</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Advanced progress tracking with streaks, goals, and achievements.
                </p>
              </div>
            </FlagGate>
          </div>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          Tip: Add <code>?enable=flagName</code> to any URL to temporarily enable a feature
        </div>
      </div>
    </div>
  );
};

const getFeatureDescription = (key: string) => {
  switch (key) {
    case 'newExamUI':
      return 'Enhanced exam interface with better UX';
    case 'chartsV2':
      return 'New analytics dashboard with interactive charts';
    case 'enhancedProgress':
      return 'Advanced progress tracking features';
    default:
      return 'Feature flag for testing new functionality';
  }
};

export default Preview;
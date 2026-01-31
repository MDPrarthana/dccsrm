import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonBlock } from "@/components/ui/ComingSoonBlock";
import { Sparkles, Target, Layers, GitMerge } from "lucide-react";

const Skills = () => {
  return (
    <AppLayout>
      <PageHeader
        title="Skills"
        description="Skill mapping and analysis capabilities"
      />

      {/* Coming Soon Banner */}
      <div className="bg-surface border border-border rounded-xl p-8 mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Skills Module Coming Soon
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          This module will be activated when skill and role tables are
          integrated into the database.
        </p>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-disabled/20 text-disabled text-xs font-medium uppercase tracking-wider">
          Disabled — Requires skill & role tables
        </span>
      </div>

      {/* Future Capabilities */}
      <h3 className="text-lg font-medium text-foreground mb-4">
        Planned Capabilities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ComingSoonBlock
          title="Company → Skill Mapping"
          description="View which skills each company requires and at what depth level."
          requiredData="skill_requirements table"
        />
        <ComingSoonBlock
          title="Role Expectations"
          description="Understand skill expectations for different roles and levels."
          requiredData="roles table"
        />
        <ComingSoonBlock
          title="Skill Overlap Analysis"
          description="Identify transferable skills across companies and industries."
          requiredData="skill_relationships table"
        />
        <ComingSoonBlock
          title="Skill Depth Indicators"
          description="Visualize proficiency requirements from foundational to expert level."
          requiredData="skill_levels table"
        />
        <ComingSoonBlock
          title="Industry Skill Trends"
          description="Track emerging and declining skills across sectors."
          requiredData="skill_trends table"
        />
        <ComingSoonBlock
          title="Personal Skill Gap Analysis"
          description="Compare your skills against target company requirements."
          requiredData="student_skills table"
        />
      </div>

      {/* Visual Roadmap */}
      <div className="mt-8 stat-card">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">
          Integration Roadmap
        </h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phase 1</p>
              <p className="text-xs text-muted-foreground">
                Skill taxonomy setup
              </p>
            </div>
          </div>
          <div className="hidden md:block w-12 h-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Target className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phase 2</p>
              <p className="text-xs text-muted-foreground">
                Company-skill mapping
              </p>
            </div>
          </div>
          <div className="hidden md:block w-12 h-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <GitMerge className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phase 3</p>
              <p className="text-xs text-muted-foreground">
                Student skill profiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Skills;

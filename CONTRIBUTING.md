# Contributing to Amplyfive

Thanks for considering contributions to Amplyfive! We're excited to have you help make AI-assisted development better for everyone.

## What are agent skills?

Agent skills are folders containing a `SKILL.md` file that provides instructions, patterns, and examples for AI coding agents. When an agent invokes a skill, it receives context-specific guidance that helps it produce higher-quality output.

Unlike generic documentation, skills are designed to be consumed by AI agents. They include concrete patterns, real code examples, anti-patterns to avoid, and clear structure that agents can follow systematically.

## How to add a new skill

1. **Create a new folder** under `skills/` with a descriptive name (e.g., `skills/react-hooks-patterns/`)

2. **Add a SKILL.md file** with the following structure:

   ```yaml
   ---
   name: "Skill Name"
   description: "One-line description of what this skill provides"
   ---

   ## Goal
   Brief description of what this skill helps agents achieve.

   ## Patterns
   - Pattern 1: Description with example
   - Pattern 2: Description with example

   ## Examples
   Concrete code examples showing the patterns in action.

   ## Anti-patterns
   Common mistakes to avoid, with explanations.

   ## Checklist
   - [ ] Item 1
   - [ ] Item 2
   ```

3. **Update the main README.md** to include your skill in the "Available skills" section with a one-line description

4. **Open a pull request** with a clear description of your skill and its intended use

## Guidelines for good skills

- **Be opinionated and concrete** – Skills should provide specific guidance, not vague advice. Prefer "use 2rem spacing for section breaks" over "use reasonable spacing"

- **Include real examples** – Show actual code snippets, configuration files, or directory structures. Abstract examples are less useful

- **Provide context** – Explain when to use a pattern and when not to. Trade-offs and alternatives are valuable

- **Use checklists** – Agents can follow checklists systematically. They're more actionable than paragraphs of text

- **Include anti-patterns** – Show what to avoid and why. This is often as valuable as showing what to do

- **Keep it focused** – Each skill should have a clear, narrow scope. Don't try to cover everything in one skill

- **Test it yourself** – Try invoking your skill with an AI agent and see if the output improves. Iterate based on results

## Pull request process

1. Fork the repository and create a branch for your skill
2. Add your skill folder with `SKILL.md` following the structure above
3. Update the README.md to list your skill
4. Open a pull request with:
   - A clear title describing the skill
   - A description of what the skill does and why it's useful
   - Any example outputs or improvements you've observed
5. Be open to feedback and iteration – we may suggest refinements to improve clarity or effectiveness

## Ideas for skills

Looking for inspiration? Here are some skill ideas we'd love to see:

- **Backend**: REST API design patterns, database schema design, authentication patterns
- **DevOps**: Kubernetes basics, Terraform patterns, monitoring and observability
- **Frontend**: CSS-in-JS patterns, state management patterns, accessibility patterns
- **Data**: Data validation patterns, ETL patterns, API integration patterns
- **Testing**: Unit test organization, integration test patterns, test data management
- **Security**: Input validation patterns, dependency management, secret handling

## Questions?

If you have questions about contributing or skill design, feel free to open an issue or discussion. We're happy to help!
